# 做什么的

1. 本例中实现了一个按两次ctrl+c退出relp环境的demo。

## 怎么做的

1. 利用`process`监听`SIGINT`方法。