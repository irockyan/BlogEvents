let baseHeight = 170

// window.onresize = function () {
//     let deviceWidth = document.body.offsetWidth
//     if(deviceWidth > 960) {
//         baseHeight = 210
//     }else if(deviceWidth > 1920) {
//         baseHeight = 250
//     }
// }

nameArr.forEach(function (name) {
    //图片容器
    let img = document.createElement('img')
    img.src = `../nice/${name}`
    img.style.height = baseHeight + 'px'
    img.onload = function (data) {
        console.log(data.target.offsetWidth)
    }
    //图片容器的容器
    let container = document.createElement('div')
    container.classList.add('img_container')
    document
        .body
        .appendChild(img)
});