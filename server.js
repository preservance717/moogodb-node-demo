/**
 * Created by gaole on 8/9/16.
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', require('./mogodb'));

app.listen(5000, function () {
    console.log('listening on 5000')
});

