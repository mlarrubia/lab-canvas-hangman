class Hangman{
  constructor(){
    this.words = ["Matthew", "Mario", "IronHack","blah"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord(){
    let randIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randIndex];
  }

  checkIfLetter(e){
    if (e.keyCode >= 65 && e.keyCode <= 90){
      return true;
    }
    else{
      return false;
    }    
  }

  checkClickedLetters(letter){
    return !this.letters.includes(letter);
  }

  addWrongLetter(){
    this.errorsLeft--;
    this.checkGameOver();
  }

  addCorrectLetter(letter){
    console.log("Adding letter " + letter);
    this.guessedLetter += letter;
    this.checkWinner();
  }

  checkGameOver(){
    if(this.errorsLeft <= 0){
      return true;
    }
    else{
      return false;
    }
  }

  checkWinner(){
    
  }

}
