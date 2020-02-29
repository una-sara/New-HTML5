//js/msg.js 弹幕
//1:创建弹幕构造函数 msgObj
var msgObj = function(){
    this.m = [];   //弹幕显示文字
    this.x = [];   //弹幕中文字x坐标 水平移动
    this.y = [];   //弹幕中文字y坐标 垂直位置
    this.spd = []; //弹幕中文字移动速度
    this.font = [];//弹幕中文字大小
    this.color = [];//弹幕中文字颜色
    //弹幕状态 活动 true 隐藏 false
    this.alive = [];
}
//2:为构造函数添加属性num=100 字符串‘池’容量
msgObj.prototype.num = 100;
//3:为构造函数添加方法init    初始化弹幕数量
msgObj.prototype.init = function(){
  //3.1:为字符串池中内容赋值初始值
  for(var i=0;i<this.num;i++){
   //3.2:初始字符串x 在画布最右侧
   this.x[i] = canWidth;
   //3.3:初始化字串y默认0在用户输入字符串时再指定
   this.y[i] = 100;
   //3.4:初始化字符串内容 ""
   this.m[i] = "";//为测试abc
   //3.5:初始化字符串 文字大小 颜色
   this.font[i] = "12px";
   this.color[i] = "#fff";
   //3.6:初始化字符串移动速度 状态
   this.spd[i] = 3;
   this.alive[i] = false;//隐藏 为测试显示
  }
}
//4:为构造函数添加方法draw    绘制弹幕
msgObj.prototype.draw = function(){
  //console.log(123);
  //4.1:清除画布上所有内容
  ctx.clearRect(0,0,canWidth,canHeight);
  //4.2:创建循环遍历每个字符串
  for(var i=0;i<this.num;i++){
   //4.3:判断当前字符串是否是显示状态
   if(this.alive[i]){
    //4.4:获取当前字符串颜色赋值画笔对象填充色
    ctx.fillStyle = this.color[i];
    //4.5:获取当前字符串文字大小赋值画笔文字大小
    ctx.font = this.font[i]+" SimHei";
    //4.6:将当前当前字串x减字符串速度(移动)
    this.x[i] -= this.spd[i];
    //4.7:填充绘制当前字符串
    ctx.fillText(this.m[i],this.x[i],this.y[i]);
    //4.8:判断x是否小于 0 字符串己经移动最左侧
    if(this.x[i]<0){
     //4.9:将字符串当前状态修改false
     this.alive[i] = false;
     //4.10:将当前字符串移动到画布最右侧
     this.x[i] = canWidth;
    }
   }
  }
  //添加智能定时器
}
//5:将msg.js添加01_index.html文件中
//6:并且在main.js 创建msgObj并且调用相应方法
//7:为构造函数添加方法add   用于添加一个新字符串
//参数:m={font:'22px',msg:"666",color:'#f00'}
msgObj.prototype.add = function(m){
    //功能:按顺序查找第一个状态为false字符串
    //     显示
    //7.1:创建循环遍历每个字符串
    for(var i=0;i<this.num;i++){
    //7.2:判断当前字符串状态是否是false
       //出列
       if(this.alive[i]==false){
        //7.3:随机分y值
        this.y[i] = Math.random()*canHeight;
        //7.4:随机分配速度
        this.spd[i] = 1+Math.random()*3;
        //7.5:分配字体大小
        this.font[i] = m.font;
        //7.6:分配文字颜色
        this.color[i] = m.color;
        //7.7:分配显示文字
        this.m[i] = m.msg;
        //7.8:修改当前字符串状态为true
        this.alive[i] = true;
        //7.9:返回 一次能挑一个字符串活动 
        return;
       }
    }//for end    
}