const mongoose = require('mongoose')

mongoose.connect('mongodb://xxx:xxx@127.0.0.1:27017/xxx', {useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log("连接数据库成功~~~~")
})
mongoose.connection.once('close', () => {
    console.log("已断开数据库~~~~")
})
