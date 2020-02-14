// Project #1: Build a Game with HTML, CSS and JavaScript
// Requirements:
//  - Render in the browser
//  - Include separate HTML / CSS / JavaScript files
//  - Use Javascript for DOM manipulation
//  - Be deployed online, using Github Project pages and/or to a custom domain.
//  - Use semantic markup for HTML and CSS (adhere to best practices)
//  - Show a good commit history with frequent commits
//  - Additionally, your project should stick with KISS (Keep It Stupid Simple) and DRY (Don't Repeat Yourself) principles.

//Defined variables for the Instructionsn pop up window.
const instructions = document.querySelector('.instructions')
const popUp = document.querySelector('#myPopUp')
const close = document.querySelector('.close')

// Defined variables for the user to select the desired number of disks.
const numberOfDisksLabel = document.querySelector('numberOfDisks')
const dropdown = document.querySelector('.dropdown')
const dropdownButton = document.querySelector('.dropdownButton')

// Defined variables to count the moves and time it takes for the player to complete the game.
const moveCounter = document.querySelector('#moves-counter')
let timeCounter = document.querySelector('#time-counter')
let minutes = 0
let seconds = 0
let timeString

const towerA = document.querySelector('.tower-a')
console.log(towerA)
const towerB = document.querySelector('.tower-b')
console.log(towerB)
const towerC = document.querySelector('.tower-c')
console.log(towerC)

// Defined a variable for the user to restart the game.
const restart = document.querySelector('.restart')

// Created functions and event listeners for the pop up instructions window.
function openPopUp() {
    popUp.style.display = 'block';
}
instructions.addEventListener('click', openPopUp)

function closePopUp() {
    popUp.style.display = "none"
}
close.addEventListener('click', closePopUp)

// Created a function to change the number of disks.
function getSelectedLevel() {
    let level = document.querySelector('.dropdown').value
    console.log(level)
}
dropdownButton.addEventListener('click', getSelectedLevel)

function countMoves() {
    moveCounter.textContent++
}

// Created a function to count the time.
function countTime() {
    
    ++seconds
    if (seconds < 10) {
        timeString = "0" + seconds
    } else if (seconds >=10 && seconds <= 59) {
        timeString = seconds + ""
    } else if (seconds >= 60) {
        seconds = 0
        minutes++
        timeString = seconds + ""
    }
    console.log(timeString)
    timeCounter.textContent = `${minutes}:${timeString}`
    console.log(timeCounter)
}
setInterval(countTime,1000)

// Created a function to restart the game.
function restartGame() {
    location.reload();
}
restart.addEventListener('click', restartGame)




