class HangmanCanvas{
  constructor(){
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.createBoard();
  }
  
  HangmanCanvas(secretWord) {
    
  }
  
  
  createBoard(){
    this.drawHangman();
    this.drawLines();
    this.writeCorrectLetter();

  }

  drawLines(){

  }

  writeCorrectLetter(){

    let word = hangman.secretWord;

    this.ctx.font = '48px serif';
    this.ctx.fillText(word, 500, 500);
  }

  writeWrongLetter(){

  }


  // Eduardo 
  drawLetter(letter, position) {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(letter, ...position);
  }
  drawGuessedWord() {
    // hangman.guessArray.forEach((letter, index) => {
    //     drawLetter(letter, [670 + 22 * index, 275]);
    // });
    hangman.letters.forEach((letter, index) => {
        drawLetter(letter, [670 + 22 * index, 330]);
    });
  }




  drawHangman(){
    // draw Triangle
    this.ctx.beginPath();
    this.ctx.moveTo(150, 650);
    this.ctx.lineTo(300, 650);
    this.ctx.lineTo(225, 575);
    this.ctx.closePath();
    this.ctx.stroke();
   
    // draw the stick
    this.ctx.moveTo(225, 575);
    this.ctx.lineTo(225, 100);
    this.ctx.lineTo(450, 100);
    this.ctx.lineTo(450, 150);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  gameOver(){

  }

  winner(){

  }

}

