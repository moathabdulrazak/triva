






export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.answers = [...this.incorrect_answers, this.correct_answer]

    this.answers.sort(a => Math.random() - 0.5)

  }



  get questionTemplate() {
    return `
<form  onsubmit="app.questionsController.checkAnswer('${this.answers}')" action="">
<div class="col-6 justify-content-center d-flex card shadow rounded the-font m-auto">
<p>${this.question}</p>
<input type="radio" id="html" name="answer" value="${this.answers[0]}">
<label required for="html">${this.answers[0]}</label><br>
<input required type="radio" id="html" name="answer" value="${this.answers[1]}">
<label required for="html">${this.answers[1]}</label><br>
<input required type="radio" id="html" name="answer" value="${this.answers[2]}">
<label required for="html">${this.answers[2]}</label><br>
<input required type="radio" id="html" name="answer" value="${this.answers[3]}">
<label required for="html">${this.answers[3]}</label><br>
<button class="p-2 colored-btn selectable the-font the-glow ">submit</button>
</div>
</form>

    `
  }

}