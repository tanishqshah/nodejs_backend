const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get("/angular", (req, res) => {
    // fs.readFile('angular.html', (err, data) => {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });
    fs.readFile('./angular.html', 'utf8', (err, data) => {
        res.send(data);
    })
});

app.get("/react", (req, res) => {
    res.send("Hello react");
});

app.get("/vue", (req, res) => {
    res.send("Hello vue");
});

app.listen(port, () => {
    console.log(`Port active ${port}`);
})