//密碼檢驗方程式
// let password = "abc12345";
// let input;
// const times = 3;
// let y = 1;
// let last = times;
// while(y <= times && input != password){
//   input = prompt("請輸入密碼，你剩下"+last+"次機會");
//   if(input != password){
//     last = times-y;
//     alert("剩餘次數"+last);
//     y++;
//   };
// };

// if(y<=times){
//   alert("登入成功")
// }
// else{
//   alert("登入失敗")
// };

// object 物件
//  key value
//  鍵    值
let person = {
  name:"Jay",
  age:25,
  is_male:true,
  print_st:function(){
    document.write(this.name," movie");
    document.write("-----")
    
  }
};
person.print_st();
document.write("<br/>");
// console.dir(document);

let movie = {
  title:"捍衛任務4",
  maker:"頂峰娛樂",
  duration:169,
  actors:[
    {
      name:"Keanu Reeves",
      age:39,
      is_male:true 
    },
    {
      name:"甄子丹",
      age:40,
      is_male:true
    }
  ]
};
document.write(movie.actors[0].name);
document.write("<br/>");

//while 迴圈，直到false出現
let i = 1;
while(i<=7){
  document.write(i);
  document.write("<br/>");
  i=i+1;
};
console.log(i)
document.write("<hr/>");

let x = 1;
do{
  document.write(x);
  document.write("<br/>");
  x++;
}while(x<=8);
document.write("<hr/>")
//for迴圈
for(let z=1 ; z<=9; z++ ){
  document.write(z);
  document.write("<br/>");
  };

let array=["Jay","Andy","Herry"];
for(let a=0 ; a<array.length ; a++){
  document.write(array[a]);
  document.write("<br/>");
};

//製造問答程式

// let qa=[
//   {
//     quation:"香蕉顏色?\n(a)紅色\n(b)綠色\n(c)黃色",
//     answer:"c"
//   },
//   {
//     quation:"蘋果顏色?\n(a)紅色\n(b)綠色\n(c)黃色",
//     answer:"a"
//   },
//   {
//     quation:"西達摩咖啡在哪?\n(a)印尼\n(b)衣索比亞\n(c)泰國",
//     answer:"b"
//   }
// ];
// let goal=0;
// for(b=0 ; b<qa.length ; b++){
//   let input=prompt(qa[b].quation);// prompt提問換行\n
//   if(input==qa[b].answer){
//     alert("答對了");
//     goal=goal+30;
//   }
//   else if(input==""){
//     alert("請認真作答!!");
//   }
//   else{
//     alert("答錯了");
//   }
// };
// document.write("The total goal is "+goal+".");

//二維陣列、巢狀迴圈

let number = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [0]
];
// for(c=0;c<number.length;c++){
//   out=number[c]
//   if(c!=number.length-1){
//     for(d=0;d<3;d++){
//       document.write(out[d]);
//       document.write("<br/>");
//       };
//   }
//   else{
//     document.write(out[0]);
//     document.write("<br/>");
//   };
// };
for(c=0;c<number.length;c++){
    for(d=0;d<number[c].length;d++){
      document.write(number[c][d]);
      document.write("<br/>");
      };
};