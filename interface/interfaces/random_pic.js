const fs = require('fs')
const path = require('path')

function getPicture(req, res) {
    new Promise((resolve, reject) => {
        fs.readdir('./static/images/', (err, files) => {
            if (err) {
                reject(err)
            }
            const fileName = files[parseInt(Math.random() * files.length)]
            resolve(fileName)
        })
    }).then((fileName) => {
        res.sendFile(path.join(__dirname, `../static/images/${fileName}`))
    }).catch((err) => {
        res.send({
            status: "error"
        })
    })
}

module.exports = {
    getPicture
} 
