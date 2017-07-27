window.onload = function () {
    gradualChange()
}

function gradualChange() {
    //获取搜索条元素
    const searchBar = document.querySelector('.js_top-bar')
    const jsHeaderBanner = document.querySelector('.js_header_banner')
    window.onscroll = function () {
        let scrollTop = document.body.scrollTop
        let percent = scrollTop / jsHeaderBanner.offsetHeight
        console.log(percent);
        if (percent >= 1) {
            searchBar.style.backgroundColor = `rgba(222, 24, 27, 1)`
        }
        searchBar.style.backgroundColor = `rgba(222, 24, 27, ${percent})`
    }
}
