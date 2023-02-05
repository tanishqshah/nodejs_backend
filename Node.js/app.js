var http = require("http");
http.createServer(function (req, res) {
    if (req.url == '/data') {
        res.writeHead(200, { 'content-Type': 'applicattion/json' });
        res.write(JSON.stringify({ message: 'Hello World' }));
        res.end();
    }
}).listen(5000);
console.log("Running");