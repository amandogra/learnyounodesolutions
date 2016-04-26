var mymodule = require('./mymodule');
var dirpath = process.argv[2];
var filter = process.argv[3];

mymodule(dirpath, filter, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
})
