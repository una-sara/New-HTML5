//01.js  40
//接收用户输入数值
onmessage = function(event){
 var num = parseInt(event.data); 
 //完成累加和
 var sum = 0;
 for(var i=1;i<=num;i++){
  sum += i;
 }
 //并且将结果返回ui
 postMessage(sum);
}