DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
  id INT GENERATED ALWAYS AS IDENTITY,
  date TIMESTAMP NOT NULL,
  category TEXT,
  content TEXT NOT NULL
);