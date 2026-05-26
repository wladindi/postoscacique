import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(2).max(120),
  telefone: z.string().trim().min(8).max(30),
  email: z.string().trim().email().max(160),
  localOperacao: z.string().trim().min(2).max(120),
  quantidadeVeiculos: z.string().trim().min(1).max(40),
  tipoOperacao: z.string().trim().min(2).max(120)
});

export type ContactPayload = z.infer<typeof contactSchema>;
