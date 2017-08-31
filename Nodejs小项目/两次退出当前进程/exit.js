setInterval(() => {
  console.log('这里是在执行')
}
, 1000)

let ifExit = false
process.on('SIGINT', () => {
  if(ifExit){
    process.exit()
  }else{
    ifExit = true
  }

  setTimeout(function() {
    ifExit = false
  }, 1000);
}
)