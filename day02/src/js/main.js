//main.js 游戏入口文件 
//1:创建一组全局变量
//1.1:创建全局变量msg保存弹幕对象
var msg;
//1.2:创建二个全局变量画布画笔
var c3;
var ctx;
//1.3:创建二个全局变量画布宽度和高度
var canWidth;
var canHeight;
//1.4:创建四个全局变量
//    输入框/颜色列表/字体列表/发送按钮
var inputMsg;   //输入框
var inputColor; //颜色列表
var inputFont;  //字体列表
var inputBtn;   //发送按钮

//2:创建函数game  游戏入口函数
function game(){
    init();      //调用初始化函数
    gameloop();  //调用循环绘制函数
}
//3:创建函数init  初始化函数(初始弹幕)
function init(){
  //3.1:初始化画布与画笔对象
  c3 = document.getElementById("c3");
  ctx = c3.getContext("2d");
  //3.2:初始化画布宽度
  canWidth = c3.width;
  //3.3:初始化画布高度 
  canHeight = c3.height;
  //console.log(canWidth+":"+canHeight);
  //3.4:创建弹幕对象!
  msg = new msgObj();
  //3.5:调用弹幕对象初始化方法
  msg.init();
  //3.6:添加二个测试文字
  //msg.add({font:"32px",color:"#f00",msg:"66"});
  //msg.add({font:"22px",color:"#ff0",msg:"55"});
  //msg.add({font:"12px",color:"#f0f",msg:"33"});
  //3.7:获取输入框/颜色列表/字体列表/发送按钮
  inputMsg = document.getElementById("inputMsg");
  inputColor = document.getElementById("inputColor");
  inputFont = document.getElementById("inputFont");
  inputBtn = document.getElementById("inputBtn");
  //3.8:发送按钮绑定事件
  inputBtn.addEventListener("click",handleMsg)
}
//4:创建函数gameloop  循环绘制弹幕内容
function gameloop(){
  //4.1:创建智能定时器调用gameloop函数
  requestAnimationFrame(gameloop);
  //4.2:调用弹幕绘制方法
  msg.draw();
}
//5:当body元素加载成功后绑定game函数
document.body.onload = game;
//6:将main.js添加01_index.html
//7:按钮事件处理函数
function handleMsg(){
  //7.1:获取输入内容转js对象
  var obj = {
    msg:inputMsg.value,
    font:inputFont.value,
    color:inputColor.value}
  //7.2:添加字符串
    msg.add(obj);
}