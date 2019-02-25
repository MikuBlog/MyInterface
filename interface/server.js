require('./database/database_start')

const express = require('express')
const bodyParser = require('body-parser')
const randomWord = require('./interfaces/random_word')
const randomPic = require('./interfaces/random_pic')
const randomDate = require('./interfaces/random_data')
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

// 获取随机一言
app.get('/getWord', randomWord.getRandomWord)
// 插入随机一言
app.post('/insertWord', bodyParser.urlencoded({extended: false}), randomWord.insertWord)
//随机获取一张缩略图
app.get('/getPicture', randomPic.getPicture)
// 获取占位数据
app.get('/getData', randomDate.getRandomData)


app.listen(8888)