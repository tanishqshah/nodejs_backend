var express = require('express');
var app = express();
const path = require('path');
// var bodyParser = require("body-parser");
// const { reset } = require('nodemon');    

app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res){
 res.sendFile(path.join(__dirname+'/assets/index.html'));
});

app.get('/getmarkssheet',(req,res)=>{
    res.sendFile(path.join(__dirname+'/assets/marks.html'));
});

app.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname+'/assets/profile.html'));
});

app.post('/calculate-marks',(req,res)=>{
    // console.log(req.body);
    let math = parseInt(req.body.math); let science = parseInt(req.body.science); let computer = parseInt(req.body.computer);
    let marks = math+science+computer;
    let percentage = marks/3;
    let max = Math.max(computer,Math.max(math,science));
    let statement = `${req.body.name} RECORD<br><br><br>Your total marks: ${marks}<br><br>Your percentage: ${percentage}<br><br>Your maximum marks: ${max}`;
    res.send(statement);
});

app.post('/submit-profile',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let designation = req.body.designation;
    let remarks = req.body.remarks;
    let message = `Name: ${name}\nEmail: ${email}\nDesignation: ${designation}\nRemarks: ${remarks}`;
    let alert = "<script>alert("+name+"); window.location.href = '/';</script>";
    console.log(alert);
    res.end(`<script>alert("Name: ${name}\\nEmail: ${email}\\nDesignation: ${designation}\\nRemarks: ${remarks}"); window.location.href = '/';</script>`);
});


app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(req);
    res.send(name + ' Submitted Successfully!');
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});