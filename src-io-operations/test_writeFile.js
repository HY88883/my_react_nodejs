var fs = require("fs");
fs.writeFile("hello1.txt","这是通过writeFile写入的",{flag:"a"},function (err) {
    if(!err){
        console.log("成功写入~~");
    }else{
        console.log("写入失败~~");
    }
});
