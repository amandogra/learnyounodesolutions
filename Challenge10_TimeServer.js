var net = require('net');
var strftime = require('strftime'); //you have to install 'strftime' npm package

var server = net.createServer(function (socket) {
    socket.write(strftime('%F %H:%M'));
    socket.write('\r\n');
    socket.end();
});
server.listen(process.argv[2], function () {
    console.log('server listening at' + process.argv[2]);
});
