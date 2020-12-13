const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = 3000;

app.use(express.json());
// app.use('/', router);

app.listen(PORT, () => {
    console.log(`Bible Notes app running on http://localhost:${PORT}`)
})