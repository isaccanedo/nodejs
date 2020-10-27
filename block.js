var file = require('fs');
var data = file.readFileSync('text.txt');
console.log(data.toString());