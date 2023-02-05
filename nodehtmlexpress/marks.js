var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname+'/marks.html'));
});
app.post('/result', function (req, res) {
    var maths = eval(req.body.maths);
    var science = eval(req.body.english);
    var comp = eval(req.body.computer);
    var marks = parseInt(req.body.maths)+ parseInt(req.body.english) + parseInt(req.body.computer);   
    var percen = marks / 3;
    res.send(` Total Marks-${marks}<br>
            Total percentage - ${ percen} <br>
            Your Maximum marks are ${Math.max(maths,Math.max(science,comp))} <br>
    Your Minimum marks are ${Math.min(maths,Math.min(science,comp))}`);
});
var server = app.listen(3000, function () {
    console.log('Node server is running..');
});