import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";







class QuestionsService {
  // getScore() {
  //   let score = appState.score++;
  // }
  checkAnswer(answer) {
    let correctQuestion = appState.questions.find(a => a.correct_answer == answer)
    if (correctQuestion) {
      console.log('correct');
      Pop.toast('you smart')
      appState.score++
      console.log("getting points", appState.score)
    } else {
      console.log("you dumb");
      Pop.toast('you dumb')
    }
    this.getQuestions()
  }
  async getQuestions() {
    const response = await axios.get('https://opentdb.com/api.php?amount=1')
    console.log(response);
    appState.questions = response.data.results.map(questionsData => new Question(questionsData))
  }

}



export const questionsService = new QuestionsService()