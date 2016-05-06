var map = require('through2-map');/*install this first using npm install through2-map*/
 inStream.pipe(map(function (chunk) {
   return chunk.toString().toUppercase();
 })).pipe(outStream);
