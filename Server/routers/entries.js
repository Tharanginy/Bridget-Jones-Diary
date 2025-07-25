// const express = require("express");
// const Router = express.Router();

const { Router } = require('express')

const controller = require('../controllers/entries');

const router = Router();

router.get('/', controller.getAllEntries);
router.get('/:id', controller.getEntryById);
router.post('/', controller.createEntry);
router.put('/:id', controller.updateEntry);
router.delete('/:id', controller.deleteEntry);
router.get('/search', controller.searchEntries);  // place it before '/:id'


module.exports = router;
