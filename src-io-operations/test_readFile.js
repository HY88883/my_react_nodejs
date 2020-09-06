var fs = require("fs");
fs.readFile("hello2.txt",function (err,data) {
    if(!err){
        console.log(data.toString());
        fs.writeFile("hello3.txt",data,function () {
            if(!err){
                console.log("写入成功了");
            }else{
                console.log("写入失败");
            }
        });
    }
});
