import { headers } from 'next/headers';
import { AuthError, getUserFromHeaders } from '@/lib/auth';
import TaskApp from './task-app';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let user;
  let denied = false;
  try {
    user = await getUserFromHeaders(await headers());
  } catch (error) {
    if (error instanceof AuthError) denied = true;
    else throw error;
  }

  if (denied || !user) {
    return (
      <main className="page-shell">
        <section className="notice-card" role="alert">
          <p className="eyebrow">ACCESS CONTROL</p>
          <h1>Sign-in required</h1>
          <p>This application needs a valid identity session. Return through the approved access gateway and sign in with an allowed account.</p>
        </section>
      </main>
    );
  }

  return <TaskApp identity={user.email} />;
}
