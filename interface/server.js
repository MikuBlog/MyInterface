require('./database/database_start')

const express = require('express')
const bodyParser = require('body-parser')
const randomWord = require('./interfaces/random_word')
const randomPic = require('./interfaces/random_pic')
const app = express()

app.use(express.static(__dirname+ "/static"))

// 获取随机一言
app.get('/getWord', randomWord.getRandomWord)
// 插入随机一言
app.post('/insertWord', bodyParser.urlencoded({extends: false}), randomWord.insertWord)
//随机获取一张缩略图
app.get('/getPicture', randomPic.getPicture)

app.listen(8888)