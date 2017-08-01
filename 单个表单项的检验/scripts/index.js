window.onload = function () {
    /**
     * 验证表单
     */
    //获取输入框
    const inputName = document.querySelector('.js_form_input')
    //获取验证按钮
    const verfyBtn = document.querySelector('.js_form_btn')
    //事件
    verfyBtn.addEventListener('click', function () {
        verify(inputName)
    })

}

/**
 * 
 * @param {*表单} ele
 */
function verify(ele) {
    //输入的值
    let inputValue = ele.value
}