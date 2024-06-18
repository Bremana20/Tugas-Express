const express = require('express');

const NotesController = require('../controllers/notes');

const router = express.Router();

// CREATE - POST
router.post('/', NotesController.createNewNotes);

// READ - GET
router.get('/', NotesController.getAllNotes);

// UPDATE - PATCH
router.patch('/:idNotes', NotesController.updateNotes);

// DELETE - DELETE
router.delete('/:idNotes', NotesController.deleteNotes);

module.exports = router;
