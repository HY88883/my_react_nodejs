var fs = require("fs");
var ws = fs.createWriteStream("hello2.txt");
ws.once("open",function () {
    console.log("流打开了");
});

ws.once("close",function () {
    console.log("流关闭了");
});

ws.write("你好呀");
ws.write("hahhah");
ws.write("h哈尔和");
ws.write("好漂亮");
ws.write("好美");
ws.write("搞笑");

ws.end();
