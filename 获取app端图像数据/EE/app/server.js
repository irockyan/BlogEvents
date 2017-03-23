// todo:https设置。
const http = require('http');

const port = 8081;

const data = {
    name:'Zyan'
}

const resHander = (req,res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
}
const server = http.createServer(resHander);

server.listen(port,() => {
    console.log('服务器已经开启');
});