//公共方法
const $ = (sel) => {
  return document.querySelector(sel);
}

var pageYOffset;


var speed = 0,
  aim = 0,
  timer = null,
  tops = $('.ad').offsetTop;


window.onscroll = function () {
  clearInterval(timer);
  pageYOffset = window.pageYOffset;
  console.log(pageYOffset);
  aim = pageYOffset + tops;
  console.log(aim);
  timer = setInterval(function () {
    speed += (aim - speed) * 0.1;
    $('.ad').style.top = speed + '50px';
  }, 30)
}