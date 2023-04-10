//Blog
let title = document.getElementById('title');
let content = document.getElementById('content');

let bt = document.getElementById('bt');

let list = document.getElementById('list');

bt.addEventListener("click", function() {
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
// getclick('#bt');

//方法四
function get(elem) {
    let btn = document.querySelector(elem);
    return {
        act: function(func) {
          btn.addEventListener('click', func);
        }
      }
};

get('#bt').act(function () {
    alert('click!');
  })

