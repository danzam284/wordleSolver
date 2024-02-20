# Wordle Solver Chrome Extension
Made by Daniel Zamloot

## About
This is an extension which helps you to solve wordle puzzles on [Wordle Unlimited](https://wordleunlimited.org) or [Wordle](https://www.nytimes.com/games/wordle/index.html). It uses a custom algorithm to achieve a high success rate and is completely integrated with the site so that it can predict the best option every turn.

## Use It
https://chromewebstore.google.com/detail/wordle-solver/dackgklclohfgkhkgcbffocblfinffla

## Features
1. It has an insanely high success rate due to implementing a word relevancy API into the word choice. On average, it takes 3-5 turns to find the word.
2. Obviously it would be no fun to only use it once a day, so we made it also work on Wordle Unlimited so you can keep playing with it!
3. The extension can pickup from where you left off so no need to always start from a blank board (it will process the whole board contents before starting).
4. Sometimes the algorithm can break if you leave the tab, so we have a pop-up warning with instructions on how to continue if this happens with no harm to the game.
5. It has been tested on multiple machines and is reliable if used correctly.

## Instructions
1. Go to https://wordleunlimited.org or https://www.nytimes.com/games/wordle/index.html
2. Make sure any obstructions are out of the way and you can see the gameboard
3. Find the extension button in your chrome menu and click it so that it says 'ON'
4. Remain on the page and watch the puzzle solve itself.

## Technology Used
- ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) For script injection and the algorithm
- ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) For collaborating with the Wordle HTML and summoning a warning message
- ![](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) For generating a prototype (in the scripts folder)
