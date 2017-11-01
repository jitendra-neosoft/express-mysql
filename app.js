'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config');

app.set('port', config.PORT);

app.use(bodyParser.json());

require('./modules/db/db');

app.use('/api/v1', require('./modules/user/routes'));

app.listen(app.get('port'), () => {
    console.log(`Server is listening on ${(app.get('port'))}`);
})