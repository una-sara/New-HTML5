//server/03_chart_app.js
//多对多聊天室服务器
//(1)创建web服务器
var app = require("http").createServer(); 
//(2)创建io对象
var io = require("socket.io")(app); 
//(3)绑定监听端口4000
app.listen(4000);
//(4)创建变量clientCount 客户数量
var clientCount = 0;
//(5)为io绑定事件客户连接事件 connection
io.on("connection",(socket)=>{
//功能一:广播操作 新人加入
//(6)将clientCount加一
clientCount++;
//(7)创建昵称 user:1
var nickname = "user: "+clientCount;
//(8)将昵称广播所有用户 user:1到来..
io.emit("enter",nickname+"comes in");
//功能二:将客户聊天信息广播所有人
//(9)接收客户发送聊天信息
socket.on("message",(data)=>{
  //(10)将聊天信息广播所有用户
  io.emit("list",nickname+" says: "+data);
})
//功能三:当客户退出广播所有人
socket.on("disconnect",(data)=>{
   //(11)广播所有人下线
   io.emit("leave",nickname+" leave");
})
})

