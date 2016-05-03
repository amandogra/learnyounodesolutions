var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.log(err)
        console.log(data.toString().split('').length);
        console.log(data.toString());
    }));
})
