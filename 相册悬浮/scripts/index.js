//检测鼠标的方向

window.onload = function () {
    //图片
    const img = document.querySelector('.img')
    img.addEventListener('mouseenter', function (evt) {
        var w = this.offsetWidth
        var h = this.offsetHeight
        var x = (evt.pageX - this.offsetLeft - (w / 2)) * (w > h
            ? (h / w)
            : 1)
        var y = (evt.pageY - this.offsetTop - (h / 2)) * (h > w
            ? (w / h)
            : 1)
        var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4
        console.log(dirNum)
        switch (dirNum) {
            case 0:
                goIn('top')
                break
            case 1:
                goIn('left')
                break
            case 2:
                goIn('bottom')
                break
            case 3:
                goIn('left')
                break

            default:
                break;
        }
    })
    img.addEventListener('mouseleave', function (evt) {
        var w = this.offsetWidth
        var h = this.offsetHeight
        var x = (evt.pageX - this.offsetLeft - (w / 2)) * (w > h
            ? (h / w)
            : 1)
        var y = (evt.pageY - this.offsetTop - (h / 2)) * (h > w
            ? (w / h)
            : 1)
        var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4
        console.log(dirNum)
        switch (dirNum) {
            case 0:
                goOut('top')
                break
            case 1:
                goOut('left')
                break
            case 2:
                goOut('bottom')
                break
            case 3:
                goOut('left')
                break

            default:
                break;
        }
    })
    function goIn(str) {
        img.className = ''
        img.classList.add(str)
        img.classList.add('img')
    }
    function goOut(str) {
        img.className = ''
        img.classList.add('img')
    }
}