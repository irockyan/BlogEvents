window.onload = function () {
    // 左侧所有的按钮
    const leftItems = document.querySelectorAll('.slider_left_item')
    //右侧所有的按钮
    const rightItems = document.querySelectorAll('.slider_right_item')
    // 为左侧按钮添加点击事件
    leftItems.forEach(function (item, index) {
        item.addEventListener('click', function (evt) {
            rightItems.forEach(function (item, index) {
                item.classList.remove('show')
            })
            rightItems[index].classList.add('show')
        })   
    })
}