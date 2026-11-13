import pg from 'pg';

const { Pool } = pg;
const globalForPg = globalThis;

function getPool() {
  if (globalForPg.__taskLedgerPool) return globalForPg.__taskLedgerPool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL must be configured before a database query is made.');
  }

  const pool = new Pool({
    connectionString,
    max: Number.parseInt(process.env.PGPOOL_MAX ?? '10', 10),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    application_name: 'task-ledger-course15',
  });

  pool.on('error', (error) => {
    // Log a code only; error messages can contain environment details.
    console.error('Unexpected idle PostgreSQL client error:', error.code ?? 'UNKNOWN');
  });

  globalForPg.__taskLedgerPool = pool;
  return pool;
}

// Lazy initialization keeps `next build` independent of production secrets/DB access.
const poolProxy = {
  query: (...args) => getPool().query(...args),
  connect: (...args) => getPool().connect(...args),
  end: (...args) => getPool().end(...args),
};

export default poolProxy;
