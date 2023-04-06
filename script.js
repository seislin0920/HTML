//基本資料型態 ＆ 變數
/* 多行註解
    123
    456
    789
*/

//字串
// "Hellow word"

//數字
// 187

//布林值
// true
// false

//變數
// var $myname = "Lin Jay" ;
// var age = 87 ;
// var $is_male = true ;

// document.write("<h1>Jay</h1>");
// document.write($myname + " age is " + age);

//字串
// var text = "\"Hellow\" I'm Jay.";
// document.write(text);
// document.write("<br/>");
//數字

// document.write(6*8);
// document.write("<br/>");
//% 取餘數
// document.write(8%3);
// document.write("<br/>");

// document.write(Math.max(2,3,4,90,6,7));
// document.write("<br/>");
// document.write(Math.round(Math.random() * 10));

//製作計算機 prompt輸入皆為字串
// var myname = prompt("請輸入名字");
// var age = prompt("請輸入年紀");
// document.write("你好哎" + myname);
// document.write("你的年紀是" + age + "歲");

// var num1 = prompt("輸入要相加數字1");
// var num2 = prompt("輸入要相加數字2");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// document.write(num1 + num2);

//array陣列
// var scores = [80,60,30,100];
// document.write(scores);
// document.write("<br/>");
// document.write(scores[0]);
// document.write("<br/>");
// document.write(scores.length)

//函式 function
// function hellow(n1,a1,num1,num2){
//     document.write("Hellow " + n1);
//     document.write("<br/>");
//     document.write("你今年"+a1+"歲");
//     document.write("<br/>");
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
    //return（回傳）的以下程式不作用
//     return num1 + num2 ;
    
// }
// var nam = prompt("請輸入名字");
// var age = prompt("你的年紀");
// var num1 = prompt("請輸入數字");
// var num2 = prompt("請輸入數字");
// document.write("score=" + hellow(nam,age,num1,num2));

//if 判斷 且&&  或|| 等於== 不等於!= !代表反面（可用於雙否定）
// var score = 100;
// var rainy = true;
// if (score==100 && rainy){
//     document.write("我給你1000");
// }
// else if(score>=80){
//     document.write("我給你500");
// }
// else if(score>=60){
//     document.write("我給你100");
// }
// else {
//     document.write("你給我300");
// }

//Max_num 函數
function Max_num(n1,n2,n3){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    if(n1>n2 && n1>n3){
        return(n1);
    }
    else if(n2>n3){
        return(n2);
    }
    else{
        return(n3);
    }
}
n1 = prompt("數字1");
n2 = prompt("數字2");
n3 = prompt("數字3");
document.write(Max_num(n1,n2,n3));
