window.onload = () => {
    // dom点
    //关于
    let navAbout = document.querySelector('.js_nav_about')
    // 关于的内容
    let about = document.querySelector('.about')
    //tab栏点击滚动页面
    navAbout.addEventListener('click', function () {
        console.log('你好')
        Velocity(about, {scroll: 1000}, {
            duration: 1000
        });
        // about.velocity("scroll", 1000);
    })
}