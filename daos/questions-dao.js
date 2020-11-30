const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qId) => questionsModel.findById(qId)
const findQuestionsForQuiz = (quizId) => questionsModel.findById(quizId)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }