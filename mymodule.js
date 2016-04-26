var fs = require('fs');
var path = require('path');

module.exports = function (dirpath, filter, callback) {
    var singleFile, singleFileExt, filteredArr = [];
    fs.readdir(dirpath, function (err, list) {
        if (err) {
            //if there is error show the error in the console
            return callback(err);
        } else {
            //read the list
            for (var i=0, l=list.length; i<l; i++) {
                singleFile = list[i];
                singleFileExt = path.extname(singleFile);
                if (singleFileExt === '.'+ filter){
                    filteredArr.push(singleFile);
                }
            }
            return callback(null, filteredArr.join('\n'));
        }
    })
}
