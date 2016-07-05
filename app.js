var express = require('express');
var bodyParser = require("body-parser");
var indexPage = require('./views/indexPage.js');
//var profitModule = require('./models/profitModule.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(indexPage.getPage(req.query));
});

app.listen(3000, function () {
  console.log('Profit Start...');
});