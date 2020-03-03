//功能:完成海葵类 ane.js
//1:创建海葵构造函数 aneObj
var aneObj = function(){
  //1.1:创建变量保存起点坐标x [y=600不用添加]
  this.rootx = [];
  //1.2:创建变量保存终点坐标x
  this.headx = [];
  //1.3:创建变量保存终点坐标y
  this.heady = [];
  //1.4:创建变量保存摆动幅动amp 20~50
  this.amp = [];
  //1.5:创建变量保存-1~1 之间值
  this.alpha = 0;
}
//2:为海葵构造函数添加属性 num=50
aneObj.prototype.num = 50;
//3:为海葵构造函数添加方法 init
aneObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    //3.1:初始化海葵起点x坐标 y固定值 600
    this.rootx[i]=i*16+Math.random()*20;
    //3.2:初始化海葵终点x坐标[初始值直线]
    this.headx[i]=this.rootx[i];
    //3.3:初始化海葵终点y坐标 11:50
    this.heady[i]=canHeight-250+Math.random()*50;
    //3.5:初始化海葵摆动幅度
    this.amp[i]=Math.random()*30+20;
  }//for end
}
//4:为海葵构造函数添加方法 draw
aneObj.prototype.draw = function(){
  //4.1:计算非常小小数
  this.alpha += deltaTime * 0.0008;
  //4.2:依据小数通过正弦函数获取-1 ~ 1
  var l = Math.sin(this.alpha);
  //console.log(l);//4~5 秒周期
  //4.3:保存画笔2状态 #原因不希望其它元素影响海葵
  ctx2.save();
  //4.4:设置样式与外观 
  ctx2.strokeStyle = "#3b154e";//描边样式
  ctx2.globalAlpha = 0.6;      //透明度
  ctx2.lineCap = "round";      //顶端圆角
  ctx2.lineWidth = 20;         //描边宽度
  //4.5:创建循环遍历每个海葵
  for(var i=0;i<this.num;i++){
   //4.6:创建新路径
   ctx2.beginPath();
   //4.7:移动起点坐标 13
   ctx2.moveTo(this.rootx[i],canHeight);
   //4.8:重新计算终点坐标x
   this.headx[i] = this.rootx[i]+l*this.amp[i];
   //4.9:绘制贝赛尔曲线  控制点x,y 终点x,y
   ctx2.quadraticCurveTo(
     this.rootx[i],canHeight-100,
     this.headx[i],this.heady[i]);
   //4.10:描边
   ctx2.stroke();
  }//for end
  //4.12:恢复画笔2状态
  ctx2.restore();
}
//5:将ane.js 添加index.html文件中
//6:在main.js 创建海葵对象
//  并且调用相关方法 30