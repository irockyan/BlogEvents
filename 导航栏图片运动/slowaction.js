function slowAction(ele, target) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        var errorLength = target - ele.offsetLeft
        var step = errorLength/10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        ele.style.left = ele.offsetLeft + step + 'px'
        if (Math.abs(errorLength) < Math.abs(step)) {
            ele.style.left = target + 'px'
            clearInterval(timer)
        }
    }, 10)
}