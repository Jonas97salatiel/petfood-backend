const express = require('express');

require('dotenv').config();

const routes = require('./routes');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({ error: error.menssage})
})

var porta = process.env.PORT || 8080;

app.listen(porta, ()=> console.log('Server is running'));


