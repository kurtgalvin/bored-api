CREATE TABLE "card" (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE "color" (
    id CHAR(1) UNIQUE,
    name TEXT,
    sort_order INT,
    base64 TEXT
);

CREATE TABLE "card_color" (
    id SERIAL PRIMARY KEY,
    card_id INT REFERENCES card(id),
	color_id CHAR(1) REFERENCES color(id)
);