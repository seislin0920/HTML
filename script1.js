//取得HTML元素
//引入需放在id下面
let h1 = document.getElementById("header");
h1.innerText = "Hi Jay.";
h1.style.color = "blue";

let link = document.getElementById("link");
console.log(link); //除錯
document.write("\n");

// event listener 方法1
// function record(element) {
//     // alert("叫你按就按ㄛ");
//     element.innerText = "你按你按";
//     element.style.color = "red";
//     console.log(element);
// };

// event listener 方法2
let btn = document.getElementById("bt");
console.log(btn);
btn.addEventListener("click", function() {
    alert("你按阿");
    this.innerText = "你按你按";
    this.style.color = "red";
});

//偵測滑鼠滑到圖片
let img = document.getElementById("img");
console.log(img);
img.addEventListener("mouseover", function() {
    this.src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/4D88/production/_102984891_46918.jpg";
});
img.addEventListener("mouseout", function() {
    this.src = "https://www.maruplayplay.com/wp-content/uploads/Costumice-cafe1.jpg";
});