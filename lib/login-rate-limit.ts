const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 2 * 60 * 1000;

type AttemptRecord = {
  count: number;
  lastAttemptAt: number;
  lockedUntil: number | null;
};

// In-memory store; survives dev hot-reload via globalThis, resets on server
// restart (acceptable for a single-instance dashboard).
const globalForRateLimit = globalThis as unknown as {
  loginAttempts?: Map<string, AttemptRecord>;
};

const attempts = (globalForRateLimit.loginAttempts ??= new Map());

function keyFor(email: string) {
  return email.trim().toLowerCase();
}

/** Seconds until the lockout ends, or null if the email is not locked out. */
export function getLockoutRemaining(email: string): number | null {
  const record = attempts.get(keyFor(email));
  if (!record?.lockedUntil) return null;

  const remainingMs = record.lockedUntil - Date.now();
  if (remainingMs <= 0) {
    attempts.delete(keyFor(email));
    return null;
  }
  return Math.ceil(remainingMs / 1000);
}

export function recordFailedLogin(email: string) {
  const key = keyFor(email);
  const now = Date.now();
  const record = attempts.get(key);

  // Start a fresh count if the previous failures are older than the window.
  if (!record || now - record.lastAttemptAt > LOCKOUT_MS) {
    attempts.set(key, { count: 1, lastAttemptAt: now, lockedUntil: null });
    return;
  }

  record.count += 1;
  record.lastAttemptAt = now;
  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_MS;
  }
}

export function clearFailedLogins(email: string) {
  attempts.delete(keyFor(email));
}
