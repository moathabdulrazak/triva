import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
getFormData

function drawQuestions() {
  let questions = appState.questions
  let template = ''
  questions.forEach(q => template += q.questionTemplate)
  setHTML('questions', template)
  setHTML('quest-get', appState.score)



}
export class QuestionsController {
  constructor() {
    this.getQuestions()
    console.log('burh');
    appState.on('questions', drawQuestions)
    // appState.on('answers', this.checkAnswer)
  }

  checkAnswer(answer) {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log("yuh", formData);
    questionsService.checkAnswer(formData.answer)
  }




  async getQuestions() {
    console.log('data');
    await questionsService.getQuestions()
    this.checkAnswer
  }

  // getScore() {
  //   setHTML("quest-get", appState.score)
  //   questionsService.getScore()
  // }


}