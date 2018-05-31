//call both functions at start
restart();
bindcards();


// to restart the game and shuffle the cards
function restart() {
  $(".restart").on("click", function() {
    cards = shuffle($(".card"));
    $(".card").each(function() {
      $(this).removeClass("open match show");
    });
    $(".deck").html(cards);
    bindcards();
    moves = 0;
    counter.innerHTML = moves;
  });
}

//to open/show the card
function bindcards() {
  let numOfOpenCards = 0;
  $(".card").click(function(e) {
    ++numOfOpenCards;


    if(numOfOpenCards > 2)
      return;

    $(this).addClass("open show");

    let openCards = $(".open");
    let list = jQuery.makeArray(openCards);

    if (numOfOpenCards === 2 && list && list.length === 2 && list[0].innerHTML === list[1].innerHTML) {
      $(openCards).addClass("match");
    }

    if (numOfOpenCards >= 2) {
      setTimeout(hola, 1000);
      function hola() {
        numOfOpenCards = 0;

        let openCards = $(".open");
        let list = jQuery.makeArray(openCards);
        if(list) {
          for(let i = 0; i < list.length; ++i)
            $(list[i]).removeClass("open show");
        } moveCounter();
      }congrats ();
    }
  });
}



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)

 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 let moves = 0;
 let counter = document.querySelector(".moves");

 function moveCounter(){
     moves++;
     counter.innerHTML = moves;
         }
    



function congrats (){
  let matchedCards = $(".match");
  let listOfMatches = jQuery.makeArray(matchedCards);
if (listOfMatches.length === 16){

  $(".overlay").toggleClass("up");
  closeOverlay();
}

};

function closeOverlay(){
  $(".close").on("click", function(){

$(".overlay").removeClass("up");
})
}
