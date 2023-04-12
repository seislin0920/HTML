//Blog
// let title = document.getElementById('title');
// let content = document.getElementById('content');

// let bt = document.getElementById('bt');

// let list = document.getElementById('list');

// bt.addEventListener("click", function() {
//     list.innerHTML = list.innerHTML + `
//     <div class="article">
//             <h2>${title.value}</h2>
//             <p>${content.value}</p>
//             <hr/>
//         </div>
//     `;//``可以任意換行與引用js
//     title.value = '';
//     content.value = '';
// });

//jQuery

//方法一
// let btn = document.querySelector('#bt');
// btn.addEventListener('click', function() {
//   alert('click!');
// });

//方法二
// function getElement(elem) {
//     return document.querySelector(elem);
//   }
// let btn = getElement('#bt');
// console.log(btn);
// btn.addEventListener('click', function() {
//     alert('click!');
//   });

//方法三
// function getclick(elem) {
//     let btn = document.querySelector(elem);
//     return btn.addEventListener('click', function() {
//         alert('click!');
//   });
// };
// getclick('#bt'); //alert('click!')爲封閉之動作

//方法四
// function $(elem) {
//     let btn = document.querySelector(elem);
//     return {
//         aEL:function(act, func) {
//           btn.addEventListener(act, func);
//         } //物件方式引入act function，這裏的"func"爲addEventListener內可填之參數
//       };
// };

// $('#bt').aEL("mouseover",function () {
//     alert('go away!');
//   });

//融合！！
function $(elem) {
    let btn = document.querySelector(elem);
    return {
        aEL:function(act, func) {
          btn.addEventListener(act, func);
        }, //物件方式引入act function，這裏的"func"爲addEventListener內可填之參數
      };
};

let title = document.querySelector('#title');
let content = document.querySelector('#content');
let list = document.querySelector('#list');
$('#bt').aEL('click',function () {
    alert('輸入成功');
    list.innerHTML = list.innerHTML + `
      <div class="article">
              <h2>${title.value}</h2>
              <p>${content.value}</p>
              <hr/>
          </div>
      `;//``可以任意換行與引用js
      title.value = '';
      content.value = '';
});
  