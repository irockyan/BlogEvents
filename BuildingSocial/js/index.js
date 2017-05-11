const $ = (ele) => {
  return document.querySelector(ele);
}

$('video').addEventListener('timeupdate', function () {
    
  const ct = $('video').currentTime;

  const flag = Math.floor(ct + 0.9), //当前的时间
    whole = Math.floor(ct / 3); //现在执行到第几个
    console.log(whole);
    
  if (flag % 3 == 0) {
    $('.list-options li').classList.remove('current');
  } else {
    $(`.list-options li:nth-child(${whole+1})`).classList.add('current');
  }
})
