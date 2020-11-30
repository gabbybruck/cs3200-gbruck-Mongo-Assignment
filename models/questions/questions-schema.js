const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
   question: String,
   options: [String]
}, {collection: 'questions'})
module.exports = questionsSchema