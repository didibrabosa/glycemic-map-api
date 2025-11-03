CREATE TABLE  IF NOT EXISTS glycemia (
    glycemia_id SERIAL PRIMARY KEY,
    glycemia NUMERIC(3) NOT NULL,
    result VARCHAR(50) NOT NULL,
    meal VARCHAR(50),
    observation TEXT DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
);