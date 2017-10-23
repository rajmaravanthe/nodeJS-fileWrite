
var http = require('http');
fs = require('fs')
var data = "I love node JS. Thank you acadgild";
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });
    fs.writeFile('./file.txt', data, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        response.end(data);
        console.log(data);
    });

});

server.listen(3000);