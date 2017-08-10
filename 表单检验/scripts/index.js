window.onload = function () {
    // 名称输入框
    const inputName = document.querySelector('.js_input_name')
    //密码输入框
    const inputPwd = document.querySelector('.js_input_pwd')
    //再次输入密码框
    const inputRePwd = document.querySelector('.js_input_pwd_re')
    //邮件输入框
    const inputMail = document.querySelector('.js_input_mail')
    //手机输入框
    const inputPhone = document.querySelector('.js_input_phone')
    //提交按钮
    const submit = document.querySelector('.js_form_submit')

    //构建数据结构
    let fullData = [
        {
            name: 'inputName',
            ele: inputName,
            tips: '必填，长度为4-16个字符',
            pattern: '',
            trueMsg: '名称正确',
            falseMsg: '名称不正确'
        }, {
            name: 'inputPwd',
            ele: inputPwd,
            tips: '请输入密码',
            trueMsg: '密码可用',
            falseMsg: '密码不可用'
        }, {
            name: 'inputRePwd',
            ele: inputRePwd,
            tips: '请再次输入密码',
            trueMsg: '密码正确',
            falseMsg: '密码与第一次输入不符'
        }, {
            name: 'inputMail',
            ele: inputMail,
            tips: '请输入邮箱',
            trueMsg: '邮箱正确',
            falseMsg: '邮箱格式不正确'
        }, {
            name: 'inputPhone',
            ele: inputPhone,
            tips: '请输入手机号',
            trueMsg: '手机号正确',
            falseMsg: '手机号不正确'
        }
    ]

    //调用方法
    verify('inputName')
    verify('inputPwd')
    verify('inputRePwd')
    verify('inputMail')
    verify('inputPhone')
    submit.addEventListener('click', function () {
        console.log('这里是提交')
    })

    //封装获得焦点方法

    function verify(ele) {
        for (let item of fullData) {
            if (ele === item.name) {
                item
                    .ele
                    .addEventListener('focus', function () {
                        item.ele.parentElement.children[2].innerHTML = item.tips
                    })
                item
                    .ele
                    .addEventListener('blur', function () {
                        //校验

                    })
            }
        }
    }

    function beFocus(ele,) {}

}