const quizModel = require('../models/quizzes/quizzes-models.js')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }