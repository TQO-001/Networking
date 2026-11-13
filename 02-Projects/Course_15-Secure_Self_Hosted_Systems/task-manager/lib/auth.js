import 'server-only';
import { createRemoteJWKSet, jwtVerify } from 'jose';

export class AuthError extends Error {
  constructor(message = 'Authentication required.') {
    super(message);
    this.name = 'AuthError';
    this.status = 401;
  }
}

let cachedJwks;
let cachedIssuer;

function getJwks(issuer) {
  if (!cachedJwks || cachedIssuer !== issuer) {
    cachedIssuer = issuer;
    cachedJwks = createRemoteJWKSet(new URL(`${issuer.replace(/\/$/, '')}/cdn-cgi/access/certs`));
  }
  return cachedJwks;
}

function devIdentity() {
  if (process.env.NODE_ENV !== 'production' && process.env.ALLOW_DEV_AUTH === 'true') {
    const email = process.env.DEV_USER_EMAIL?.trim().toLowerCase();
    if (!email) throw new AuthError('Local development identity is not configured.');
    return { email, subject: `local:${email}` };
  }
  return null;
}

/**
 * Validates the access gateway's signed JWT assertion. The exact header, issuer,
 * audience and JWKS URL are provider-specific; this adapter is for Cloudflare Access.
 * Never accept an email or identity claim supplied in an arbitrary client header.
 */
export async function verifyAccessToken(token) {
  const issuer = process.env.ACCESS_ISSUER?.replace(/\/$/, '');
  const audience = process.env.ACCESS_AUD;

  if (!issuer || !audience) {
    throw new AuthError('Identity verification is not configured.');
  }
  if (!token) throw new AuthError();

  try {
    const { payload } = await jwtVerify(token, getJwks(issuer), {
      issuer,
      audience,
      algorithms: ['RS256'],
      clockTolerance: 5,
    });

    const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
    const subject = typeof payload.sub === 'string' ? payload.sub : '';
    if (!email || !subject) throw new AuthError('Required identity claims are missing.');

    return { email, subject };
  } catch (error) {
    if (error instanceof AuthError) throw error;
    // Do not leak signature, issuer, audience or token details to the caller.
    throw new AuthError('The identity assertion is invalid or expired.');
  }
}

export async function getUserFromHeaders(headers) {
  const localUser = devIdentity();
  if (localUser) return localUser;

  const token = headers.get('cf-access-jwt-assertion');
  return verifyAccessToken(token);
}
