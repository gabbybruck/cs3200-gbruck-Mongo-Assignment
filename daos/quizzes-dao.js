const quizModel = require('../models/quizzes/quizzes-models.js')
const findAllQuizzes = () => quizModel.find()
const findQuizById = (quizId) => quizModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }