CREATE DATABASE midwestern;

CREATE TABLE contactform(
  contactform_id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  title VARCHAR NOT NULL,
  message VARCHAR NOT NULL
);

CREATE TABLE headingone(
  lorem_id SERIAL PRIMARY KEY,
  lorem_heading_one TEXT
);

CREATE TABLE headingtwo(
  lorem_id SERIAL PRIMARY KEY,
  lorem_heading_two TEXT
);

CREATE TABLE paragraph(
  lorem_id SERIAL PRIMARY KEY,
  lorem_paragraph TEXT
);