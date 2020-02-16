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
const numberOfDisksLabel = document.querySelector('.numberOfDisks')
const dropdown = document.querySelectorAll('.dropdown')
const dropdownButton = document.querySelector('.dropdownButton')
let level = document.querySelector('.dropdown').value
console.log(level)

// Defined variables to count the moves and time it takes for the player to complete the game.
const moveCounter = document.querySelector('#moves-counter')
let timeCounter = document.querySelector('#time-counter')
let minutes = 0
let seconds = 0
let timeString
let timeVariable


let towers = document.querySelectorAll('.tower')
console.log(towers)
let source = document.querySelector('#source')
const auxiliary = document.querySelector('#auxiliary')
const destination = document.querySelector('#destination')
console.log(source,auxiliary,destination)

let disk = document.querySelectorAll('.disk')
let disk1 = document.querySelector('.disk1')
let disk2 = document.querySelector('.disk2')
let disk3 = document.querySelector('.disk3')
let disk4 = document.querySelector('.disk4')
let disk5 = document.querySelector('.disk5')
console.log(disk,disk1,disk2,disk3,disk4,disk5)

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


function countMoves() {
    moveCounter.textContent++
}
function moveDisk () {
    console.log("ready to move a disk?")
    
}

// Created a function to alert the user they won the game.
function winMessage() {
    clearInterval(timeVariable)
    alert("You won!")
    restartGame()
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
    timeCounter.textContent = `${minutes}:${timeString}`
}

function addNewDisk (level) {
    label = `disk${level}`
    console.log("Label" + label)
    newDisk = document.createElement('div')
    newDisk.setAttribute('class',`disk ${label}`)
    newDisk.textContent = `Disk ${level}`
    source.appendChild(newDisk);
    
    console.log(level)
    console.log(newDisk)
    return disk4
}

// Created a function to set up the level, number of disks and timer. 
function getSelectedLevel() {

    level = document.querySelector('.dropdown').value
    if (level === "4") {
        addNewDisk(level)
        disk4 = newDisk
        disk4.addEventListener('click',moveDisk)
    } else if (level === "5") {
        addNewDisk(4)
        disk4 = newDisk
        addNewDisk(5)
        disk5 = newDisk
        disk5.addEventListener('click',moveDisk)
    } else {
        disk3.addEventListener('click',moveDisk)}
    console.log(`Level is ${level} and ${disk.length}`
    )
    dropdownButton.style.display = "none"
    timeVariable = setInterval(countTime,1000) 
}
dropdownButton.addEventListener('click', getSelectedLevel)

// Created a function to restart the game.
function restartGame() {
    location.reload();
}
restart.addEventListener('click', restartGame)