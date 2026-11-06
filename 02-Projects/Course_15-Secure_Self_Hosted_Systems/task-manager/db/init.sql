CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_email TEXT NOT NULL CHECK (length(owner_email) BETWEEN 3 AND 320),
    title TEXT NOT NULL CHECK (length(title) BETWEEN 1 AND 160),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS tasks_owner_created_idx
    ON tasks (owner_email, created_at DESC);
