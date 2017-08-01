window.onload = function () {
    /**
     * 验证表单
     */
    //获取输入框
    const inputName = document.querySelector('.js_form_input')
    //获取验证按钮
    const verfyBtn = document.querySelector('.js_form_btn')
    //要求
    const ask = document.querySelector('.form_ask')
    //事件
    verfyBtn.addEventListener('click', function () {
        // 总的字符数
        let totalNum = 0
        for (let le of inputName.value) {
            if (le.charCodeAt(0) > 0xFF) {
                totalNum += 2
                console.log('文字')
            } else {
                console.log('字母')
                totalNum += 1
            }
        }
        console.log(totalNum)
        if (totalNum < 4 || totalNum > 16) {
            inputName
                .classList
                .remove('input_true')
            ask
                .classList
                .remove('ask_true')
            inputName
                .classList
                .add('input_err')
            ask
                .classList
                .add('ask_err')
            return
        }
        inputName
            .classList
            .remove('input_err')
        ask
            .classList
            .remove('ask_err')
        inputName
            .classList
            .add('input_true')
        ask
            .classList
            .add('ask_true')
    })
}