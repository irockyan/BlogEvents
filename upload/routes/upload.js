const path = require('path')
const fs = require('fs')
const express = require('express')
const router = express.Router()
const multiParty = require('connect-multiparty')

router.post('/', multiParty(), function (req, res, next) {
    // 当前文件名字
    var filename = req.files.upload[0].originalFilename
    // 文件地址
    var targetPath = path.join(__dirname, '../public/images/') + filename
    //指定路径
    fs
        .createReadStream(req.files.upload[0].path)
        .pipe(fs.createWriteStream(targetPath));
    // 返回信息
    res.json({
        code: 200,
        msg: {
            url: 'http://' + req.headers.host + '/images/' + filename
        }
    });
})

module.exports = router