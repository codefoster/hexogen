// var express = require('express');
// var app = express();
// console.log('__dirname: ' + __dirname);
// app.use(express.static(__dirname));
// app.listen(process.env.PORT);

var http = require('http');
http.createServer(function(req,res) {
    res.end('hi');
}).listen(process.env.PORT || 3000);