class Page {
  constructor(as) {
    this.currentIndex = 1
    this.as = as
  }
  init() {
    for(let i = 0; i < as.length; i ++) {
      if(0 === i) {
        continue
      }else {
        as[i].classList.add('a_other')
      }
    }
  }
  nextPage() {
    if(this.currentIndex === this.as.length) {
      return
    }
    let currentEle = document.querySelector(`.a${this.currentIndex}`)
    currentEle.style.transform = 'rotateX(-90deg)'
    this.currentIndex ++
    let nextEle = document.querySelector(`.a${this.currentIndex}`)
    nextEle.style.transform = 'rotateX(0)'
  }
  previousPage() {
    if(this.currentIndex === 1) {
      return
    }
    let currentEle = document.querySelector(`.a${this.currentIndex}`)
    currentEle.style.transform = 'rotateX(90deg)'
    this.currentIndex --
    let nextEle = document.querySelector(`.a${this.currentIndex}`)
    nextEle.style.transform = 'rotateX(0)'
  }
}

let nextBtn = document.querySelector('.btn_next')
let previousBtn = document.querySelector('.btn_previous')
let as = document.querySelectorAll('.box_events a')

let page = new Page(as)
page.init()
nextBtn.addEventListener('click', () => {
  page.nextPage()
}
)
previousBtn.addEventListener('click', () => {
  page.previousPage()
}
)
