//#main.js
//功能1:创建很多全局变量保证游戏中不同角度可以
//      相互调用
//1.1:创建二个全局变量保存二个画布
var can1;
var can2;
//1.2:创建二个全局变量保存二只画笔
var ctx1;
var ctx2;
//1.3:创建二个全局变量保存画布宽度和高度
var canWidth;
var canHeight;
//1.4:创建二个全局变量保存二帧画面之间时间差
var lastTime;
var deltaTime;//时间差(绘制游戏中内容所画时间)
//1.5:创建全局变量保存背景图片对象
var bgPic;
//1.6:创建全局变量保存海葵对象
var ane;
//1.7:创建全局变量保存食物对象
var fruit;
//1.8:创建全局变量保存大鱼对象
var mom;
//1.9:创建全局变量保存鼠标位置
var mx = 0;
var my = 0;
//1.10:创建全局变量保存分数
var data;
//1.11:创建全局变量保存光环
var wave;

//功能2:创建游戏所有角色对象
//功能3:调用所有角色绘制方法
//2：创建函数 game
function game(){
  init();
  gameloop();
}
//3: 创建函数 init
function init(){
  //3.1:初始化两个画布对象
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  //3.2:初始化两个画笔对象
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  //3.3:初始化画布宽度和高度9:37
  canWidth = can1.width;
  canHeight = can1.height;
  //3.4:初始化时间差
  //3.5:记录没有绘图开始时间
  lastTime = Date.now();
  //3.6:时间差初始为0
  deltaTime = 0;
  //3.7:创建背景图片对象并且下载指定图片
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //3.8:创建海葵对象并且调用初始化方法
  ane = new aneObj();
  ane.init();
  //3.9:创建食物对象并且调用初始化方法
  fruit = new fruitObj();
  fruit.init();
  //3.10:创建大鱼对象并且调用初始化方法
  mom = new momObj();
  mom.init();
 //3.11:为画布一绑定鼠标移动事件
 can1.addEventListener("mousemove",handleMove);
 //3.12:创建分数对象
 data = new dataObj();
 //3.13:创建光环对象并且调用绘制方法
 wave = new waveObj();
 wave.init();
}
//4: 创建函数 gameloop
function gameloop(){
  //4.1:创建定时器执行gameloop 多次调用结果
  requestAnimationFrame(gameloop);
  //4.2:获取刚才绘制完成时间点
  var now = Date.now();
  //4.3:将完成时间点减去没绘制图形时间开始点
  deltaTime = now - lastTime;
  //4.4:将上一个时间修改  now
  lastTime = now;
  //4.5:直接绘制背景图片
  ctx2.drawImage(bgPic,0,0);
  //4.5.1:调用大鱼碰撞食物方法 35
  momFruitsCollison();
  //4.6:绘制海葵
  ane.draw();
  //4.6.1:调用监听画布函数
  fruitMonitor()
  //4.7:绘制食物
  fruit.draw();
  //4.7.1:清除画布一所有元素
  ctx1.clearRect(0,0,canWidth,canHeight);
  //4.8:绘制大鱼
  mom.draw();
  //4.9:绘制分数
  data.draw();
  //4.10:绘制光环
  wave.draw();
}
//5: 当网页加载成功后调用 game
document.body.onload = game;
//6:创建函数处理鼠标移动事件
function handleMove(event){
   //获取鼠标坐标赋值全局变量
   mx = event.offsetX;
   my = event.offsetY;
}