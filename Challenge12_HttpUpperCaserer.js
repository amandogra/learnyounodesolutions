var http = require('http');
var map = require('through2-map');/*install this first using npm install through2-map*/
var server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(process.argv[2], function () {
    console.log('server listening at ' + process.argv[2]);
});

