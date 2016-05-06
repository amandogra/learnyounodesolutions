var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'contentType': 'text/plain'
    });
    var fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(response);
});
server.listen(process.argv[2], function () {
    console.log('server listening at ' + process.argv[2]);
});
