let hangman;
let canvas;
  $(document).ready(function(){ 
    document.getElementById('start-game-button').onclick = function () {  
      hangman = new Hangman();
      canvas = new HangmanCanvas();
      $(document).keydown(function(e) {
        if(hangman.checkIfLetter(e)){
            let letter = e.key;
            if(hangman.checkClickedLetters(letter)){
                hangman.letters.push(letter);
                hangman.addCorrectLetter(letter);
                canvas.drawGuessedWord();

            }
        }         
      });
      
    };
});