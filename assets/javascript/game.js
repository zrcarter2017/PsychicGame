    var numberOfRounds = 10;
    var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
    var guessedLetters = [];
    var wins = 0;
    var losses = 0;
    var numberOfGuesses = 10;
    var randomIndex = Math.floor(Math.random() * letters.length);

var reset = function() {
  numberOfGuesses = 10;
  guessedLetters = [];
  numberOfRounds = 10 - wins - losses;
}

var resetGame = function() {
  wins = 0;
  losses=0;
  numberOfGuesses = 10;
  guessedLetters = [];
  numberOfRounds = 10 - wins - losses;
}

   function psychic() {
      var randomLetter = letters[randomIndex];
      console.log(randomLetter);
      document.onkeyup = function(event) {
      randomIndex = Math.floor(Math.random() * letters.length);
      console.log(randomLetter);
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        

        if (guess == randomLetter) {
          wins++;
          reset();
          randomLetter = letters[randomIndex];

            if (numberOfRounds < 1) {
              alert("Game Over");
              resetGame();
            }
        }

        else {
          guessedLetters.push(guess);
          numberOfGuesses--;
            

        
            if (numberOfGuesses==0) {
              losses++;
              reset();
              randomLetter = letters[randomIndex];


            }
              if (numberOfRounds < 1) {
              alert("Game Over");
              resetGame();
            }
          }
      document.getElementById('numberOfRounds').innerHTML = "Rounds Left: " + numberOfRounds;
      document.getElementById('wins').innerHTML = "Wins: " + wins;
      document.getElementById('losses').innerHTML = "Losses: " + losses;
      document.getElementById('numberOfGuesses').innerHTML = "Number of Guesses: " + numberOfGuesses;
      document.getElementById('guessed').innerHTML = "Guessed: " + guessedLetters;      
          }


      }

psychic();
