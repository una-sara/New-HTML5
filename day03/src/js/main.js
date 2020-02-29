//main.js
//弹幕主管程序
//0.1:创建全局变量保存弹幕对象
var msg;
//功能:获取网页中所有元素赋值
//0.2:创建二个全局变量保存画布与画笔 47
var c3;
var ctx;
//0.3:创建二个全局变量保存画布宽度和高度 
var canWidth;
var canHeight;
//0.4:创建四个全局变量保存输入框/颜色/字体/按钮
var inputMsg;
var inputColor;
var inputFont;
var inputBtn;


//1:创建入口函数game
function game(){
  init();
  gameloop();
}
//2:创建初始化函数init
function init(){

  //2.3:初始化画布与画笔对象
  c3 = document.getElementById("c3");
  ctx = c3.getContext("2d");
  //2.4:初始化画布宽度和高度
  canWidth = c3.width;
  canHeight = c3.height;
  //2.5:将用户输入框按钮赋值 11:14
  inputMsg = document.getElementById("inputMsg");
  inputFont = document.getElementById("inputFont");
  inputColor = document.getElementById("inputColor");
  inputBtn = document.getElementById("inputBtn");

  //2.1:创建弹幕对象
  msg = new msgObj();
  //2.2:调用弹幕对象初始化方法 
  msg.init();
}
//3:创建循环绘制函数draw  10:36
function gameloop(){
  //3.1:创建智能定时器
  requestAnimationFrame(gameloop);
  //3.2:调用弹幕对象绘制方法
  msg.draw();
}
//4:将网页内容加载成功后调用 game!!!不要加()
document.body.onload = game;
