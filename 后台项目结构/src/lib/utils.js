/**
 * 获取格式话的时间
 * @param {*时间戳} timeStamp 
 * @param {*连接符号} flag
 */
export const getFormateDate = (timeStamp, flag) => {
  const date = new Date(timeStamp);
  let year = date.getFullYear(),
    month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth(),
    day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return year + ('年' || flag) + month + ('月' || flag) + day + ('日' || flag);
}


/**
 * 获得随机数
 * @param {*起始数字} startNum 
 * @param {*结尾数字} endNum 
 */
export const getRandom = (startNum, endNum) => {        
  var iChoice = endNum - startNum;        
  return Math.floor(Math.random() * iChoice + startNum);
}

/**
 * 重新设置根元素的大小
 * @param {*设计尺寸} designWidth 
 */
export const resetRootFontSize = (designWidth) => {
  const setFontSize = () => {
    var html = document.documentElement,
      viewWidth = html.clientWidth / designWidth / 100;
    html.style.fontSize = viewWidth + 'px';
  }
  document.addEventListener('DOMContentLoaded', setFontSize, false);
  window.onresize = setFontSize;
}
