var express = require('express');
var bodyParser = require("body-parser");
var appView = require('./views/appView.js');
var profitModule = require('./models/profitModule.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/all', function (req, res) {
	res.send(appView.displayAllItems(req.query));
});

app.listen(3000, function () {
  console.log('Profit Start...');
});