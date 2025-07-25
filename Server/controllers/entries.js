const Entry = require('../models/Entry');

async function getAllEntries(req, res) { //deals with error from model
  try {
    const entries = await Entry.getAllEntries();
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getEntryById(req, res) {
  const id = req.params.id;
  try {
    const entry = await Entry.getEntryById(id);
    if (!entry) {
      return res.status(404).json({error: err.message});
    }
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch entry' });
  }
}

async function createEntry(req, res) {
  const { date, category, content } = req.body;
  try {
    const newEntry = await Entry.createEntry({ date, category, content });
    res.status(201).json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function updateEntry(req, res) {
  const id = req.params.id;
  const { date, category, content } = req.body;
  try {
    const updated = await Entry.updateEntry(id, { date, category, content });
    if (!updated) {
      return res.status(404).json({error: err.message});
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
}

async function deleteEntry(req, res) {
  const id = req.params.id;
  try {
    const deleted = await Entry.deleteEntry(id);
    if (!deleted) {
      return res.status(404).json({error: err.message});
    }
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
}

module.exports = {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry
};
