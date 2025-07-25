DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
  id INT GENERATED ALWAYS AS IDENTITY,
  date TIMESTAMP NOT NULL,
  category TEXT,
  content TEXT NOT NULL
);

INSERT INTO diary_entries (date, category, content) VALUES
('2025-07-20', 'Work', 'Had a productive meeting with the team today. We’re finally making progress on the Bridget Jones Diary app.'),
('2025-07-21', 'Personal', 'Took a long walk through the park. The weather was perfect, and it cleared my mind.'),
('2025-07-22', 'Mood', 'Feeling a bit overwhelmed today. Too many tasks piling up. Need to prioritize better.'),
('2025-07-23', 'Health', 'Started a new morning yoga routine. Surprisingly refreshing and peaceful.'),
('2025-07-24', 'Work', 'Debugged the database connection issue. Turns out it was just the wrong DB_HOST in .env.'),
('2025-07-25', 'Personal', 'Watched my favorite movie and ate popcorn in bed. 10/10 self-care.'),
('2025-07-26', 'Mood', 'Feeling motivated and hopeful. The app is finally shaping up.');
