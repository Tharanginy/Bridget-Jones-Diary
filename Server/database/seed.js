const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false } // Needed for Supabase
});

const seedData = [
  {
    date: '2025-07-23T08:30:00',
    category: 'embarrassing',
    content: 'Waved at someone who wasn’t waving at me. Still thinking about it.',
  },
  {
    date: '2025-07-22T22:15:00',
    category: 'regret',
    content: 'Ate an entire pizza by myself. No regrets. Wait, some regrets.',
  },
  {
    date: '2025-07-21T06:45:00',
    category: 'dream',
    content: 'Dreamed I was in a musical… at Tesco. Everyone sang in rhymes.',
  },
  {
    date: '2025-07-20T12:00:00',
    category: 'career crisis',
    content: 'Do I really want to be a developer, or do I just like snacks?',
  },
  {
    date: '2025-07-19T09:00:00',
    category: 'love life',
    content: 'Saw my crush today. Forgot how to form words. Classic.',
  },
];

async function seed() {
  try {
    await pool.query('DELETE FROM diary_entries'); // Clears old entries
    for (const entry of seedData) {
      await pool.query(
        'INSERT INTO diary_entries (date, category, content) VALUES ($1, $2, $3)',
        [entry.date, entry.category, entry.content]
      );
    }
    console.log('✅ Seed data inserted successfully.');
  } catch (err) {
    console.error('❌ Error seeding data:', err);
  } finally {
    await pool.end();
  }
}

seed();
