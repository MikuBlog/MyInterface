const fs = require('fs')
const path = require('path')

// 随机请求本地图片
function getPicture(req, res) {
    var length;
    new Promise((resolve, reject) => {
        fs.readdir('./static/images/', (err, files) => {
            if (err) {
                reject(err)
            }
            length = files.length
            resolve(length)
        })
    }).then((length) => {
        res.sendFile(path.join(__dirname, `../static/images/${parseInt(Math.random() * length)}.jpg`))
    }).catch((err) => {
        res.send({
            status: "error"
        })
    })
}

module.exports = {
    getPicture
} 
