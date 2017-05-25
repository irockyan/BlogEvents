var body = document.querySelector('body');

body.ontouchmove = function(event){
    alert(event);
}

alert(window.devicePixelRatio + '你好');