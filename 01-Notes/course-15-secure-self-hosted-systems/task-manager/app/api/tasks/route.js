import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { AuthError, getUserFromHeaders } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function jsonError(message, status) {
  return NextResponse.json({ error: message }, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

async function authenticatedUser(request) {
  try {
    return await getUserFromHeaders(request.headers);
  } catch (error) {
    if (error instanceof AuthError) return null;
    throw error;
  }
}

export async function GET(request) {
  const user = await authenticatedUser(request);
  if (!user) return jsonError('Authentication required.', 401);

  try {
    const result = await pool.query(
      `SELECT id, title, completed, created_at, updated_at
       FROM tasks
       WHERE owner_email = $1
       ORDER BY created_at DESC`,
      [user.email],
    );
    return NextResponse.json({ tasks: result.rows }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('GET /api/tasks failed:', error.code ?? 'UNKNOWN');
    return jsonError('Unable to load tasks right now.', 500);
  }
}

export async function POST(request) {
  const user = await authenticatedUser(request);
  if (!user) return jsonError('Authentication required.', 401);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('Request body must be valid JSON.', 400);
  }

  if (!body || typeof body.title !== 'string') {
    return jsonError('A string title is required.', 400);
  }

  const title = body.title.trim();
  if (title.length < 1 || title.length > 160) {
    return jsonError('Title must contain between 1 and 160 characters.', 400);
  }

  try {
    const result = await pool.query(
      `INSERT INTO tasks (owner_email, title)
       VALUES ($1, $2)
       RETURNING id, title, completed, created_at, updated_at`,
      [user.email, title],
    );
    return NextResponse.json({ task: result.rows[0] }, {
      status: 201,
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('POST /api/tasks failed:', error.code ?? 'UNKNOWN');
    return jsonError('Unable to create the task right now.', 500);
  }
}
