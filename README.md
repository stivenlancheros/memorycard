# Memory Game Project

## Table of Contents

* [Parts]
* [Development]

## Parts

This project was made as an assingment for the Front-End nanodegree for Udacity. This website is a memorygame in which the user will be able to interact and and maked matches out of 16 cards. For this project you can find:
Index.html: Page html structure
app.js: Javascript handlind the interaction with the page and the game
app.css: Styles applied to all elements.

## Development

After the HTML was done (provided), I'd like to share some of the steps I took on JS provide the game its functions:

1. Function "restart()": Restart the game and shuffle the cards, also to set moves to 0 and restart timer.
2. Function "bindCards()": TO open and show the cards responding to the click of the user, also to add "match" class to the ones matching, creating an array for the matching cards so that i could go back to the hidden state in case they don't match
3. Shuffle function: Change the position of the cards to create a new game.
4. Function "moveCounter()": Starts counting the moves to provide a score according to the number of movements, also starts the timer at first click.
5."congrats()": Overlay once the user has finish the game, includes the time and the option to play once more.



Feel free to suggest changes on it.

Best regards.
