# 构造器模式

```js
function Person(name, age, sex) {
    this.name = name 
    this.age = age
    this.sex = sex
}

Person.prototype.toString = function () {
    console.log('这里是构造者模式' + this.age);
}

let zhaoLiu = new Person('Zyan', '20', 'male')
zhaoLiu.toString()

let wangWu = new Person('wang', '21', 'female')
wangWu.toString()
```