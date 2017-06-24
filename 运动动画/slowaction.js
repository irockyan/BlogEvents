function slowAction(ele, target) {
    let dir = target.direction ? 'left' : 'top'
    let direction =  target.direction ? 'offsetLeft' : 'offsetTop'
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        var errorLength = target.length - ele[direction]
        var step = errorLength/10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        ele.style[dir] = ele[direction] + step + 'px'
        if (Math.abs(errorLength) < Math.abs(step)) {
            ele.style[dir] = target.length + 'px'
            clearInterval(timer)
        }
    }, 10)
}