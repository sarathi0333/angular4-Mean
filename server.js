const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');

var index = require('./routes/index');
var category = require('./routes/category');

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/dist')));


app.use('/', index);
app.use('/api', category)


//app.use(fallback(__dirname + '/client/dist/index.html'));

app.listen(port, function() {
    console.log("listen to port" + port);
})