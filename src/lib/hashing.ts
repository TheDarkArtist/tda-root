import { randomBytes, createHash } from "crypto";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = createHash("sha256")
    .update(salt + password)
    .digest("hex");
  return { salt, hash };
}

export function verifyPassword(
  storedHash: string,
  salt: string,
  password: string,
) {
  const hash = createHash("sha256")
    .update(salt + password)
    .digest("hex");
  return hash === storedHash;
}

export function passwordStars(password: string) {
  return "*".repeat(password.length);
}
