//公共方法

const $ = (sel) => {
  return document.querySelector(sel);
}

(function () {
  class Modals {
    constructor(text) {
      this.text = text;
    }

    init() {
      $('.modals p').innerHTML = this.text;
      this.initDom();
      this.initEvent();
    }

    initDom() {

    }

    initEvent() {
      $('.know').addEventListener('click', () => {
        this.hide();
      })
    }

    show() {
      $('.modals').classList.add('c-appear');
    }

    hide() {
      $('.modals').classList.remove('c-appear');
    }
  }

  window.Modals = Modals;
})()
