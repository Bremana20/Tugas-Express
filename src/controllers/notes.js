const NotesModel = require('../models/note');

const getAllNotes = async (req, res) => {
    try {
        const [data] = await NotesModel.getAllNotes();
        res.json({
            message: "Get all notes success",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,  // Gunakan error.message untuk pesan error yang lebih jelas
        });
    }
}

const createNewNotes = async (req, res) => {
    const { body } = req;
    try {
        await NotesModel.createNewNotes(body);
        res.json({
            message: "Create new notes success",
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,  // Gunakan error.message untuk pesan error yang lebih jelas
        });
    }
}

const updateNotes = async (req, res) => {
    const { idNotes } = req.params;
    const { body } = req;
    try {
        await NotesModel.updateNotes(body, idNotes);
        res.json({
            message: "Update notes success",
            data: {
                id: idNotes,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,  // Gunakan error.message untuk pesan error yang lebih jelas
        });
    }
}

const deleteNotes = async (req, res) => {
    const { idNotes } = req.params;
    try {
        await NotesModel.deleteNotes(idNotes);
        res.json({
            message: 'DELETE notes success',
            data: {
                id: idNotes,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,  // Gunakan error.message untuk pesan error yang lebih jelas
        });
    }
}

module.exports = {
    getAllNotes,
    createNewNotes,
    updateNotes,
    deleteNotes,
}
