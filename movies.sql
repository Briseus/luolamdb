DROP DATABASE IF EXISTS luoladb;
CREATE DATABASE luoladb;

\c luoladb;

CREATE TABLE movies (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  poster VARCHAR,
  imdb_id VARCHAR
);

