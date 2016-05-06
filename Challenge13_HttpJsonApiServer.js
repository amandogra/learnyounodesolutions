var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);
    var requestType = parsedUrl.pathname.split('/')[2];
    var formattedTime, timeJson;
    var queryTime = new Date(parsedUrl.query.iso);
    if (requestType === 'parsetime'){
        timeJson = {
            "hour": queryTime.getHours(),
            "minute": queryTime.getMinutes(),
            "second": queryTime.getSeconds()
        }
        formattedTime = JSON.stringify(timeJson);
    } else if (requestType === 'unixtime'){
        timeJson = {
            "unixtime": queryTime.getTime()
        }
        formattedTime = JSON.stringify(timeJson);
    }
    response.writeHead(200, {
        'contentType': 'application/json'
    });
    console.log(response.end(formattedTime));
});
server.listen(process.argv[2], function () {
    console.log('server listening at ' + process.argv[2]);
});

