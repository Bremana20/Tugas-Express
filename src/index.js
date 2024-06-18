require('dotenv').config();
const express = require('express');

const notesRoutes = require('./routes/notes');
const middlewareLogRequest = require('./middleware/logs');

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
});
