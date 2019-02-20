const fs = require('fs')
const url = require('url')
const path = require('path')

function getPicture(req, res) {
    // 获取图片类型
    const getPath = url.parse(req.url).query ? decodeURI(url.parse(req.url).query.split('&')[0].split('=')[1]) : "miku"
    new Promise((resolve, reject) => {
        fs.readdir(`./static/${getPath}/`, (err, files) => {
            if (err) {
                reject(err)
            }
            try {
            	// 获取文件名称
            	const fileName = files[parseInt(Math.random() * files.length)]
            	// 获取文件对应名称
            	const number = url.parse(req.url).query.split('&')[1] ? decodeURI(url.parse(req.url).query.split('&')[1].split('=')[1]) : ""
                // 如果不含该图片id，返回错误图片
                resolve(number ? (number < files.length ? number + ".jpg" : "error") : fileName)
            }catch(e) {
            	reject(e)
            }
        })
    }).then((fileName) => {
     	// 如果没有该图片，返回错误图片
    	if(fileName == "error") {
    		res.sendFile(path.join(__dirname, `../static/error/error.jpg`))
    		return
    	}
    	// 返回图片
        res.sendFile(path.join(__dirname, `../static/${getPath}/${fileName}`))
    }).catch((err) => {
    	// 如果没有该图片，返回错误图片
        res.sendFile(path.join(__dirname, `../static/error/error.jpg`))
    })
}

module.exports = {
    getPicture
} 
