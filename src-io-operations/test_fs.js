var fs = require("fs");
fs.open("hello.txt","w",function (err,fd) {
    if(!err){
        console.log("向文件中写入内容~~~");
        fs.write(fd,"这是异步文件写入的内容~~~",function (err) {
            if(!err){
                console.log("写入成功~~");
            }
                fs.close(fd,function (err) {
                if(!err){
                    console.log("文件已关闭~~");
                }
            });
        });

    }else{
        console.log("出错了~~~~");
    }
});

console.log("open下的代码");
