var fs = require('fs');
var path = require('path');
var dirpath = process.argv[2];
var filter = process.argv[3];
var singleFile, singleFileExt, filteredArr = [];

fs.readdir(dirpath, function (err, list) {
    if (err) {
        //if there is error show the error in the console
        console.error(err);
    } else {
        //read the list
        for (var i=0, l=list.length; i<l; i++) {
            singleFile = list[i];
            singleFileExt = path.extname(singleFile);
            if (singleFileExt === '.'+ filter){
                filteredArr.push(singleFile);
            }
        }
        console.log(filteredArr.join('\n'));
    }
})

