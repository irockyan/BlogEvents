let data = {
  name: 'Zyan',
  pwd: 'Zyan121'
}
process.stdout.write('欢迎登录本系统\n')
process.stdout.write('请输入您的账户名称')
let ifUserName = true
process.stdin.on('data', (input) => {
  let inputString = input.toString().trim()
  if (ifUserName) {
    if (inputString === data.name) {
      process.stdout.write('请输入您的账户密码')
      ifUserName = false
    } else {
      process.stdout.write('你输入的账户名称不存在\n')
      process.stdout.write('请重新输入')
    }
  } else {
      if(inputString === data.pwd) {
        process.stdout.write('您的密码正确，已取出一个亿')
      } else {
        process.stdout.write('密码错误\n')
        process.stdout.write('请重新输入密码或者退出')
      }
  }
})
