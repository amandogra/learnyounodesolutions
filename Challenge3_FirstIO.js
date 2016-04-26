var fs = require('fs');
var filepath = process.argv[2];

var buf = fs.readFileSync(filepath, 'utf-8');

console.log(buf.toString().split('\n').length - 1);

