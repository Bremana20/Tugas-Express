const dbPool = require('../config/database.js');

const getAllNotes = () => {
    const SQLQuery = 'SELECT * FROM notes';
    return dbPool.execute(SQLQuery);
}

const createNewNotes = (body) => {
    const SQLQuery = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    // Ensure body properties are not undefined
    const values = [
        body.title || null,
        body.datetime || null,
        body.note || null
    ];
    return dbPool.execute(SQLQuery, values);
}

const updateNotes = (body, idNotes) => {
    const SQLQuery = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    // Ensure body properties are not undefined
    const values = [
        body.title || null,
        body.datetime || null,
        body.note || null,
        idNotes
    ];
    return dbPool.execute(SQLQuery, values);
}

const deleteNotes = (idNotes) => {
    const SQLQuery = 'DELETE FROM notes WHERE id = ?';
    return dbPool.execute(SQLQuery, [idNotes]);
}

module.exports = {
    getAllNotes,
    createNewNotes,
    updateNotes,
    deleteNotes,
}
