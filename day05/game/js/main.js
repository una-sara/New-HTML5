//#main.js
//功能1:创建很多全局变量保证游戏中不同角度可以
//      相互调用
//功能2:创建游戏所有角色对象
//功能3:调用所有角色绘制方法
//1：
//2：创建函数 game
function game(){
  init();
  gameloop();
}
//3: 创建函数 init
function init(){}
//4: 创建函数 gameloop
function gameloop(){}
//5: 当网页加载成功后调用 game
document.body.onload = game;