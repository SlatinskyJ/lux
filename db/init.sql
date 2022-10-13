CREATE TABLE IF NOT EXISTS flats (
	id SERIAL PRIMARY KEY,
	title character varying(255) NOT NULL,
	image character varying(255) NOT NULL
);