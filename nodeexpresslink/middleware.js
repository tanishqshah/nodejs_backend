var express = require('express')
var app = express()
var requestDate = function (req, res, next) {
    req.requestDate = Date()
    next()
}
app.use(requestDate)
app.get('/', function (req, res) {
    var responseMsg = '<h2 style="font-family: Verdana; color: coral;">Hello Learners!!</h2>'
    responseMsg += '<small>Request genrated at: ' + req.requestDate + '</small>'
    res.send(responseMsg)
})
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

