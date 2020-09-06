var fs = require("fs");
var rs = fs.createReadStream("hello2.txt");
var ws = fs.createWriteStream("hello4.txt");
rs.pipe(ws);
