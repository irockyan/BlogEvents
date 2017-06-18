let btn200 = document.querySelector('.Btn button:first-child')
let btn400 = document.querySelector('.Btn button:last-child')
let box = document.querySelector('.box')

btn200.addEventListener('click', function () {
  animation(box, 200)
})

btn400.addEventListener('click', function () {
  animation(box, 400)
})

function animation(ele, target) {
  clearInterval(ele.timer)
  let time = 200

  ele.timer = setInterval(function () {
    let errorLength = target - ele.offsetLeft
    let speed = errorLength > 0
      ? 10
      : -10
      console.log(errorLength + 'n' + speed);
    ele.style.left = ele.offsetLeft + speed + 'px'
    if (Math.abs(errorLength) < Math.abs(speed)) {
      ele.style.left = target + 'px'
      clearInterval(ele.timer)
    }
  }, time)
}
