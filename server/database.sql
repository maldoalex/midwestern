CREATE DATABASE midwestern;

CREATE TABLE contactform(
  contactform_id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  title VARCHAR NOT NULL,
  message VARCHAR NOT NULL
);