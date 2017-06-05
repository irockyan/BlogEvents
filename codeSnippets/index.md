# 一些常见的代码片段

## 交换俩个整型变量

```javascript
let a = 10
let b = 20
a = a + b
b = a- b
a = a - b
console.log(`${a}和${b}`)
```

## 判断某年某月末日为第多少天

```javascript
      function whiceDay(year, month, day) {
        let daysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (isLeapYear(year)){
          return sum(daysArray, month - 1) + 1 + day
        }
        return sum(daysArray, month - 1) + day
      }

      function isLeapYear(year) {
        if ( year % 400 === 0 ) {
          return true
        }else if ( year % 4 === 0 ) {
          return true
        }
        return false
      }

      function sum(array, index) {
        let sum = 0
        for( let i = 0 ; i < index ; i++ ) {
          sum += array[i]
        }
        return sum
      }
```