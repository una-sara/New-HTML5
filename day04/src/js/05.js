//1:创建开始时间
//var start = new Date().getTime();
//do{
//  var end = new Date().getTime();
//}while(end - start < 5000);
//console.log("5秒结束");
//2:创建do while循环 
//3:再次获取时间计算小于5000 继续循环
//4:接收数据
//onmessage = function(event){
//  console.log("UI发送数据:"+event.data)
//}
//5:向UI发送数据
//postMessage("456");

//当05.js执行结束将“执行完成”写msg
//var msg = document.getElementById("msg");
//msg.innerHTML = "执行完成";
postMessage("执行完成");
