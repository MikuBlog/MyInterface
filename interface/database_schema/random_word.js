const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    type: String,
    words: String,
    author: String,
    from: String
})

module.exports = mongoose.model('random_words', Schema)
