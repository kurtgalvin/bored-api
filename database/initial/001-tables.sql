CREATE TABLE "accessibility" (
    id SERIAL PRIMARY KEY,
    name TEXT,
    min FLOAT,
    max FLOAT,
    sort_order INT
);

CREATE TABLE "price" (
    id SERIAL PRIMARY KEY,
    name TEXT,
    min FLOAT,
    max FLOAT,
    sort_order INT
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    accessibility_id INT REFERENCES accessibility(id) NOT NULL,
	price_id INT REFERENCES price(id) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
);