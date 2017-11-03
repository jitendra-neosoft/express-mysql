'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config');

app.set('port', config.PORT);
app.set('view engine','ejs');

app.use(bodyParser.json());

require('./modules/db/db');

app.get('/', function (req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ]
    var tagline = "Any code of your own that you haven't looked at the six or more months as well have been written by someone else.";
    res.render('pages/index', { drinks: drinks, tagline: tagline });
})

app.get('/about', function (req, res) {
    res.render('pages/about');
})

app.use('/api/v1', require('./modules/user/routes'));

app.listen(app.get('port'), () => {
    console.log(`Server is listening on ${(app.get('port'))}`);
})