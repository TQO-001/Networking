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

async function readId(context) {
  const params = await context.params;
  return typeof params.id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(params.id) ? params.id : null;
}

export async function PATCH(request, context) {
  const user = await authenticatedUser(request);
  if (!user) return jsonError('Authentication required.', 401);

  const id = await readId(context);
  if (!id) return jsonError('A valid task ID is required.', 400);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('Request body must be valid JSON.', 400);
  }
  if (!body || typeof body.completed !== 'boolean') {
    return jsonError('The completed field must be a boolean.', 400);
  }

  try {
    const result = await pool.query(
      `UPDATE tasks
       SET completed = $1, updated_at = NOW()
       WHERE id = $2 AND owner_email = $3
       RETURNING id, title, completed, created_at, updated_at`,
      [body.completed, id, user.email],
    );
    if (result.rowCount === 0) return jsonError('Task not found.', 404);
    return NextResponse.json({ task: result.rows[0] }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('PATCH /api/tasks/[id] failed:', error.code ?? 'UNKNOWN');
    return jsonError('Unable to update the task right now.', 500);
  }
}

export async function DELETE(request, context) {
  const user = await authenticatedUser(request);
  if (!user) return jsonError('Authentication required.', 401);

  const id = await readId(context);
  if (!id) return jsonError('A valid task ID is required.', 400);

  try {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 AND owner_email = $2 RETURNING id',
      [id, user.email],
    );
    if (result.rowCount === 0) return jsonError('Task not found.', 404);
    return NextResponse.json({ deleted: true }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('DELETE /api/tasks/[id] failed:', error.code ?? 'UNKNOWN');
    return jsonError('Unable to delete the task right now.', 500);
  }
}
