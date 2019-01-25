const randomWord = require('../database_schema/random_word')
const url = require('url')
const urlencode = require('urlencode')

// 获取随机一言
function getRandomWord(req, res) {
    const name = decodeURI(url.parse(req.url).query.split('=')[1])
    if(name == "") {
        res.send({
            status: "error",
            msg: "请上传类型"
        })
        return
    }
    randomWord.find({type: name}, {"_id": 0,"show": 0, "__v": 0}, (err, details) => {
        if(err) {
            res.send({
                status: "error",
                msg: "服务器出错"
            })
            return
        }
        res.send({
            status: "ok",
            data: details[parseInt(Math.random()*details.length)]
        })
    })
}

// 插入数据
function insertWord(req, res) {
    const data = req.body
    if(data.words == "" || data.author == "") {
        res.send({
            status: "error",
            msg: "请上传随机一言和作者"
        })
        return
    }
    randomWord.create(data, (err) => {
        if(err) {
            res.send({
                status: "error",
                msg: "上传随机一言失败"
            })
            return
        }
        res.send({
            status: "ok",
            msg: "上传随机一言成功"
        })
    })
}

module.exports = {
    getRandomWord,
    insertWord
}
