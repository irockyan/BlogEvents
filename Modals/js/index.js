//公共方法

const $ = (sel) => {
  return document.querySelector(sel);
}

$('.popup').addEventListener('click', function () {
  this.classList.add('c-disappear');
  $('.modals').classList.add('c-appear');
})

$('.know').addEventListener('click', function () {
  $('.modals').classList.remove('c-appear');
  $('.popup').classList.remove('c-disappear');
})


// (function(){

// })()