const oLi = document.getElementsByClassName('ol');

const nodeList = oLi[0].children;


for (let i = 0; i < nodeList.length; i++) {
  let element = nodeList[i].firstElementChild;
  element.onclick = function () {
    showPic(element);
    return false;
  }
}

function showPic(whichPic) {
  const img = document.getElementsByTagName('img')[0];
  console.log(whichPic);
  const source = whichPic.getAttribute('href');
  img.setAttribute('src', source);
}
