CREATE TABLE  IF NOT EXISTS glycemia (
    glycemia_id SERIAL PRIMARY KEY,
    glycemia NUMERIC(5,2) NOT NULL,
    result VARCHAR(50) NOT NULL,
    meal VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL,
    observation TEXT
);