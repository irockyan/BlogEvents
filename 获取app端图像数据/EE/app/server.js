// todo:https设置。
const https = require('https'),
      fs = require('fs'),
      path = require('path');

const port = 8081;

const data = {
    name:'Zyan'
}

var privateKey  = fs.readFileSync(path.join(__dirname, '../certificate/private.pem'), 'utf8');  
var certificate = fs.readFileSync(path.join(__dirname, '../certificate/file.crt'), 'utf8');  
var credentials = {key: privateKey, cert: certificate};  

const resHander = (req,res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
}
const server = https.createServer(credentials,resHander);

server.listen(port,() => {
    console.log('服务器已经开启');
});