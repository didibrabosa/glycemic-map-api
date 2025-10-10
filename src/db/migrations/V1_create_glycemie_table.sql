CREATE TABLE  IF NOT EXISTS glycemie (
    glycemie_id SERIAL PRIMARY KEY,
    glucose NUMERIC(5,2) NOT NULL,
    result VARCHAR(50) NOT NULL,
    meal VARCHAR(50),
    observation TEXT,
    glycemie_hour TIME NOT NULL,
    glycemie_date DATE NOT NULL
);