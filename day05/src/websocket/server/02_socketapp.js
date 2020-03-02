//02_socketapp.js
//1:下载第三方模块
//   npm i socket.io
//(1)创建web服务器
//#http内置模块不需要下载
var app = require("http").createServer();
//(2)创建socket.io对象
var io = require("socket.io")(app);
//(3)绑定监听端口 3000
app.listen(3000)
//(4)接收客户端请求 
io.on("connection",(socket)=>{
   console.log("有客户端连接到服务器了!!!!");
   //服务器端接收客户消息
   //(5)绑定事件(自定义) 
   socket.on("message",(data)=>{
    console.log("客户端向服务器发送数据:"+data);
    //(6)触发客户端定义事件 server
    socket.emit("server","欢迎，欢迎交保护费!");
   })

   //(7)发送广播消息给所有客户端
   io.emit("list","明天开始大降价!!!");
   //(8)接收客户消息，离开 默认事件disconnect
   socket.on("disconnect",(data)=>{
      console.log("当前客户离开...");
   });
});