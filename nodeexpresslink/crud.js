
const express = require('express');
// require("dotenv")
const { Client } = require('pg');
const { fs } = require('fs');
const bodyparser = require('body-parser');
const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/nodeconnect';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4000);

// app.get("/", (req, res) => {
//     fs.readFile('angular.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
//     fs.readFile('./form.html', 'utf8', (err, data) => {
//         res.send(data);
//     })
// });
app.post('/search', (req, res) => {
    var id = Number(req.body.id);
    // console.log(`${id}`);
    client.query(`SELECT * FROM student where empid='${id}'`, function (err, result) {
        // console.log((`${id}`));  
        if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
});
    
app.get('/select', (req, res, next) => {
    
client.query('SELECT * FROM student', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

app.get('/delete', function (req, res, next) {
    
    client.query("delete from student where designation='Client'" , function (err, result) {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            // fs.readFile('./angular.html', 'utf8', (err1, data1) => {
            //     res.send(data1);
            // });
            res.status(200).send("Delete");
        });
});

app.get('/insert', function (req, res, next) {
    
    client.query("insert into student values('116','Gautam garg','22','Jaipur','Intern')", function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send("Insert");

    });
});


app.get('/update', function (req, res, next) {
    
    client.query("update student set designation='Client' where designation='CFO'" , function (err, result) {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send("UPDATE");
        });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
