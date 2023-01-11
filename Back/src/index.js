const api = require("./api");

const express = require("express");

const cors = require('cors')

const app = express();

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors());
    next();
})

const router = require('./router/router');

app.use(router);



app.listen(8000);
