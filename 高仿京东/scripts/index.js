window.onload = function () {
  //顶部栏颜色渐变
  gradualChange()
  //轮播图
  beginBanner()
}

function gradualChange() {
  //获取搜索条元素
  const searchBar = document.querySelector('.js_top-bar')
  const jsHeaderBanner = document.querySelector('.js_header_banner')
  window.onscroll = function () {
    let scrollTop = document.body.scrollTop
    let percent = scrollTop / jsHeaderBanner.offsetHeight·
    if (percent >= 1) {
      searchBar.style.backgroundColor = `rgba(222, 24, 27, 1)`
    }
    searchBar.style.backgroundColor = `rgba(222, 24, 27, ${percent})`
  }
}


function beginBanner() {
  //获得banner图
  const banner = document.querySelector('.banner')
  //   获得banner每一张图片
  const bannerEach = document.querySelectorAll('.banner_each')
  //   获得序号
  const serialList = document.querySelectorAll('.serial_list')

  let index = 1
  let timer = setInterval(function () {
    index++
    banner.style.transition = `all .3s`
    banner.style.transform = `translateX(${-index * bannerEach[0].offsetWidth}px)`
  }, 2000)

  banner.addEventListener('webkitTransitionEnd', function () {
    if (index > 8) {
      index = 1
      banner.style.transition = ''
      banner.style.transform = `translateX(${-index * bannerEach[0].offsetWidth}px)`
    } else if (index < 1) {
      index = 8
      banner.style.transition = ''
      banner.style.transform = `translateX(${-index * bannerEach[0].offsetWidth}px)`
    }
    for (let i = 0; i < serialList.length; i++) {
      serialList[i].classList.remove('serial_list_active')
    }
    serialList[index - 1].classList.add('serial_list_active')
  })
}
