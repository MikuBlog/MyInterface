const fs = require('fs')
const url = require('url')
const path = require('path')

function getPicture(req, res) {
    // 获取图片类型
    new Promise((resolve, reject) => {
    		fs.readdir(`./static/`, (err, files) => {
    			if(err) {
    				reject(err)
    			}		
    			resolve(url.parse(req.url).query ? decodeURI(url.parse(req.url).query.split('&')[0].split('=')[1]) : files[parseInt(Math.random() * files.length)])	
    		})
    }).then((getPath) => {
        return new Promise((resolve, reject) => {
        	fs.readdir(`./static/${getPath}/`, (err, files) => {
            if (err) {
                reject(err)
            }
            try {
            	// 获取文件名称
            	const fileName = files[parseInt(Math.random() * files.length)]
            	// 获取文件对应名称
            	let number
            	try {
            		number = url.parse(req.url).query.split('&')[1] ? decodeURI(url.parse(req.url).query.split('&')[1].split('=')[1]) : ""	
            	}catch(e) {
            		number = ""
            	}
            	resolve({
            		getPath: getPath,
            		fileName: number ? (number < files.length ? number + ".jpg" : "error") : fileName
            	})
            }catch(e) {
            	reject(e)
            }
        })	
       })
    }).then((obj) => {
     	// 如果没有该图片，返回错误图片
    	if(obj.fileName == "error") {
    		res.sendFile(path.join(__dirname, `../error/error.jpg`))
    		return
    	}
    	// 返回图片
        res.sendFile(path.join(__dirname, `../static/${obj.getPath}/${obj.fileName}`))
    }).catch((err) => {
    		// 如果没有该图片，返回错误图片
        res.sendFile(path.join(__dirname, `../error/error.jpg`))
    })
}

module.exports = {
    getPicture
} 
