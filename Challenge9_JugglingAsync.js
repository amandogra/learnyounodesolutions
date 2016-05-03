var http = require('http');
var bl = require('bl');
var resultArr = [], count=0;

for (var i=0; i<3; i++) {
    getHttp(i);
}

function getHttp(i) {
    http.get(process.argv[2+i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) return console.log(err)
            resultArr[i] = data.toString();
            count++;
            if (count === 3) {
                printResult();
            }
        }));
    })
}
function printResult () {
    for (var j=0; j<3; j++) {
        console.log(resultArr[j]);
    }
}
