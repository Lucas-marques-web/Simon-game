# Simon Game

This is a simple implementation of the Simon game using HTML, CSS, and JavaScript.

## Live Server

To play the game, click the link;

* [GitHub Repo](https://github.com/Lucas-marques-web/Drum-game)
* [Live-Server](https://lucas-marques-web.github.io/Drum-game/)

## How to Play

The Simon game is a memory game that tests your ability to remember and repeat a pattern of colors. Follow these rules to play the game:

1. Press any key to start the game.
2. Watch and listen carefully as the game shows you a sequence of colors.
3. Repeat the sequence by clicking on the buttons in the correct order.
4. If you click the wrong color, the game ends.
5. If you complete the sequence correctly, the game will show you the next sequence with one additional color.
6. Continue playing and see how far you can go!

## Game Mechanics

The game uses the following mechanics:

- There are four colored buttons: red, blue, green, and yellow.
- The game shows a sequence of colors by fading them in and out.
- The player must repeat the sequence by clicking the buttons in the correct order.
- If the player clicks the wrong color, the game ends.
- If the player completes the sequence correctly, the game shows the next sequence with an additional color.

## Code Structure

The JavaScript code consists of the following functions:

- `nextSequence()`: Generates the next color sequence and updates the game level.
- `checkAnswer(currentLevel)`: Checks the player's answer against the game's sequence.
- `startOver()`: Resets the game to its initial state.
- `playSound(name)`: Plays the corresponding sound for a given color.
- `animatePress(currentColor)`: Adds animation to the pressed button.
- Event listeners: Detects keypress and button clicks to trigger game actions.

The HTML file contains the game layout, including the buttons and the level title.

## Technologies Used

The game is built using the following technologies:

- HTML
- CSS
- JavaScript
- jQuery

## Credits

The Simon game implementation is created by LUCAS. It is a basic version and can be further enhanced with additional features and improvements.

Feel free to explore the code and customize the game according to your preferences.

Have fun playing Simon!