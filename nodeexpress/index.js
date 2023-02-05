const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/assets' + '/movies.json', 'utf8', (err, data) => {
        res.send(data);
        // return data;
    });
});

app.listen(port, () => {
    console.log(`Port active ${port}`);
})