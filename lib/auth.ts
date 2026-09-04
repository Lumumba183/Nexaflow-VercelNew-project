import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const SECRET = new TextEncoder().encode(process.env.ADMIN_SECRET || 'nexaflow-admin-secret-2026-change-me-in-production');
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'smartsolutions870@gmail.com';

export async function createToken(email: string): Promise<string> {
  if (email !== ADMIN_EMAIL) throw new Error('Unauthorized email');
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET, { clockTolerance: 60 });
    return payload as { email: string; role: string; iat: number; exp: number };
  } catch {
    return null;
  }
}

export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) {
    // Fallback for development - plain text comparison (NOT for production)
    return password === 'Pabs2090*#';
  }
  return bcrypt.compare(password, hash);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}
