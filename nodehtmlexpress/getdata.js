var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname+'/assets/index.html'));
});
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});