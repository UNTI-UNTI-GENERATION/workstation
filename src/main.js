const express = require('express');
const     app = express();
const    port = process.env.NODEJS_INNER_PORT || '80'

app.get('/', function (req, res) {
    console.log(port);
    res.send('Hello World!');
});

app.listen(port, function () {
});