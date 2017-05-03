//公共方法

/**
 * 获取元素
 */
const $ = function (ele) {
  return document.querySelector(ele);
}

//模块方法

/**
 * 切换弹出框的方法
 */
var span = (function () {
  var configMap = {
      extended_height: '434px',
      extended_title: '点击缩回',
      retract_height: '16px',
      retract_title: '点击伸长'
    },
    chatSlider,
    toggleSlider,
    onClickSlider,
    initModule;


  toggleSlider = function () {
    var chatSliderStyle = window.getComputedStyle(chatSlider,null);
    var slider_height = chatSliderStyle.height;
    if (slider_height === configMap.retract_height) {
      chatSlider.setAttribute('title', configMap.extended_title);
      chatSlider.style.height = configMap.extended_height;
    } else if (slider_height === configMap.extended_height) {
      chatSlider.setAttribute('title', configMap.retract_title);
      chatSlider.style.height = configMap.retract_height;
    }
  };

  onClickSlider = function (event) {
    toggleSlider();
  };

  initModule = function () {
    chatSlider = $('.spa_slider');
    chatSlider.setAttribute('title', configMap.retract_title);
    chatSlider.addEventListener('click', onClickSlider);
  };

  return {
    initModule: initModule
  };
}());

/**
 * 页面加载之后绑定方法
 */
window.onload = function(){
  span.initModule();
}
