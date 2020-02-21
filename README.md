# GA- Project 1:  Tower of Hanoi

## Installation:
No need.

## Links:
- Wireframe:
![](images/ga-project-1-wireframe.jpg)

 - [Link to Tower of Hanoi Game](https://dvorakkarrie.github.io/Project1_Tower-of-Hanoi/)

 ## Preview:
 The above link will direct you to a Tower of Hanoi game with counters to track the user's time and the number of moves to successfully place all the disks from largest to smallest in the right hand tower.  Before starting the game, the user will be able to select three to eight disks to include in the game.

 ## Technology Used:
- Animate.css:  Added animation to the disks and winning message
- CodePen: Reviewed the javascript code for other similar games
- Command Line:  Navigated files and interacted with GitHub
- Google Chrome:  Developer Tools used to debug and review code and tested the application via the browser
- OneNote:  Built wireframe
- Visual Studio Code:  HTML, CSS & Javascript coding
- YouTube: Watched several videos regarding coding and play the Tower of Hanoi game.

## Approach:
The main approach for this game was to track the number of moves and time the user took to move all disks from the left tower to the right hand tower.  An array and a for loop was used to create the disks.  Conditional statements were also used to count/display the time, select/move the disks and determine when the user won the game.

## Main features:
- Dropdown list to select the number of disks
- Move and time counters
- Restart button
- Includes animation

## User Stories:
- As a user, I should be able to view the instructions before, during, and after I play the game.
- As a user, I should be able to select the desired number of disks before I play the game.
- As a user, I should be able to restart the game any time after selecting the desired number of disks.
- As a user, I should be able to select the top most disk from one tower and move it to another tower.
- As a user, I should see an error message after selecting a tower without first selecting a disk.
- As a user, I should not be able to place a larger disk on a smaller disk.
- As a user, I should be shown an error message if I attempt to place a larger disk on a smaller disk.
- As a user, I should see a message when I successfully move all the disks to the right hand tower in the correct order (largest to smallest).
- As a user, I should see a message to play again by selecting the Restart button.

## Unsolved Problems
- The user has a limited amount of space to click when moving the selected disk from one tower to another.

## Future Plans
- Apply a draggable disk feature to the code.
- Develop a process to store the user's time, moves and number of wins.
- Add a automated solve feature to show the user the ideal moves.