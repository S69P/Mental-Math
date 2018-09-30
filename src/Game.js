export default class Game{
    constructor(questions = 0, correct = 0) {
        
          this.value1 = Math.floor(Math.random() * 100);
          this.value2 = Math.floor(Math.random() * 100);
          this.value3 = Math.floor(Math.random() * 100);
          this.proposedAnswer = (Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3);
          this.numQuestions = questions;
          this.numCorrect = correct;
        
      }

      


}