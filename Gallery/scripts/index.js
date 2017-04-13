const oLi = document.getElementsByClassName('ol');

console.log(oLi[0].nodeType);

const nodeList = oLi[0].children;


for (let i = 0; i < nodeList.length; i++) {
  let element = nodeList[i].firstElementChild;
  element.onclick = function () {
    showPic(element);
    return false;
  }
}

function showPic(whichPic) {
  const img = document.getElementsByTagName('img')[0],
    descNode = document.querySelector('p');
  const source = whichPic.getAttribute('href'),
    text = whichPic.getAttribute('title');
  img.setAttribute('src', source);
  descNode.firstChild.nodeValue = text;
}
