//call both functions at start
restart();
bindcards();


// to restart the game and shuffle the cards, also to set moves to 0 and restart timer.
function restart() {
  $(".restart, .oneMore").on("click", function() {
    cards = shuffle($(".card"));
    $(".card").each(function() {
      $(this).removeClass("open match show");
    });
    $(".deck").html(cards);
    bindcards();

    let moves = 0;
    counter.innerHTML = moves;
    for (var i= 0; i < stars.length; i++){
        stars[i].style.visibility = "visible";
    }

    let second = 0;
    let minute = 0;
    let hour = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);

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


// + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
// Set timer ad start at first click

 let moves = 0;
 let counter = document.querySelector(".moves");
 const stars = document.querySelectorAll(".fa-star");
 function moveCounter(){
     moves++;
     counter.innerHTML = moves;

     if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        beginToCount();
    }
    if (moves > 8 && moves < 12){
       for( i= 0; i < 3; i++){
           if(i > 1){
               stars[i].style.visibility = "hidden";
           }
       }
   }
   else if (moves > 13){
       for( i= 0; i < 3; i++){
           if(i > 0){
               stars[i].style.visibility = "hidden";
           }
       }
   }

         }

//Start timer and change to minutes/hours accordingly
let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;
function beginToCount(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" mins "+second+" secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

//Overlay once completed the game
//*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)

function congrats (){
  let matchedCards = $(".match");
  let listOfMatches = jQuery.makeArray(matchedCards);
if (listOfMatches.length === 16){
    clearInterval(interval);
    finalTime = timer.innerHTML;

  $(".overlay").toggleClass("up");
  closeOverlay();
//show the time taken
  document.getElementById("total").innerHTML = finalTime;

}

};
// to close the overlay
function closeOverlay(){
  $(".close").on("click", function(){

$(".overlay").removeClass("up");
})
}

function tryMe(){
  $(".overlay").removeClass("up");
}
