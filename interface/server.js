require('./database/database_start')

const express = require('express')
const bodyParser = require('body-parser')
const randomWord = require('./interfaces/random_word')
const app = express()

// 获取随机一言
app.get('/getWord', randomWord.getRandomWord)
// 插入随机一言
app.post('/insertWord', bodyParser.urlencoded({extends: false}), randomWord.insertWord)

app.listen(8888)