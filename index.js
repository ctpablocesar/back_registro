const express = require('express');
const bodyParser = require('body-parser');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

dbConnection();

// app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api/registros', require('./routes/resgistros'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});