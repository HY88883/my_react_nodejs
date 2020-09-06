var mgs = require("mongoose");
mgs.connect("mongodb://localhost:27017/test_mgb",{useNewUrlParser: true,useUnifiedTopology: true});
var conn = mgs.connection;
conn.once("open",function () {
    console.log("连接数据库了~~~");
});
conn.once("close",function () {
    console.log("关闭数据库了~~~");
});
mgs.disconnect();
