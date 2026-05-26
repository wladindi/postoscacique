import { NextResponse } from "next/server";
import { contactSchema } from "@/features/contact/contact.schema";
import { env } from "@/lib/env";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = rateLimit({
    key: `contact:${ip}`,
    limit: env.contactRateLimitMax,
    windowMs: env.contactRateLimitWindowMs
  });

  if (!limited.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Muitas tentativas. Tente novamente em instantes."
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(limited.retryAfterSeconds ?? 60)
        }
      }
    );
  }

  const payload = await request.json().catch(() => null);
  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Cadastro recebido com sucesso."
  });
}
