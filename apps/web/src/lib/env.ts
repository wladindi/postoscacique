export const env = {
  contactRateLimitWindowMs: Number(
    process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 60_000
  ),
  contactRateLimitMax: Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 8)
};
