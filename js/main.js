// Project #1: Build a Game with HTML, CSS and JavaScript
// Requirements:
//  - Render in the browser
//  - Include separate HTML / CSS / JavaScript files
//  - Use Javascript for DOM manipulation
//  - Be deployed online, using Github Project pages and/or to a custom domain.
//  - Use semantic markup for HTML and CSS (adhere to best practices)
//  - Show a good commit history with frequent commits
//  - Additionally, your project should stick with KISS (Keep It Stupid Simple) and DRY (Don't Repeat Yourself) principles.

(function(window){
    //Defined variables for the Instructionsn pop up window.
    const instructions = document.querySelector('.instructions')
    const popUp = document.querySelector('#myPopUp')
    const close = document.querySelector('.close')

    // Defined variables for the user to select the desired number of disks.
    const dropdownButton = document.querySelector('.dropdownButton')
    // let level = document.querySelector('.dropdown').value
    // console.log(level)

    // Defined variables to count the moves and time it takes for the player to complete the game.
    const moveCounter = document.querySelector('#moves-counter')
    let timeCounter = document.querySelector('#time-counter')
    let minutes = 0
    let seconds = 0
    let timeString
    let timeVariable

    let towerContainer = document.querySelector('.towerContainer')
    let towers = document.querySelectorAll('.tower')
    let source = document.querySelector('#source')
    let auxiliary = document.querySelector('#auxiliary')
    let destination = document.querySelector('#destination')
    console.log(source,auxiliary,destination)

    let diskClass = document.querySelectorAll('.disk')
    let disk1 = document.querySelector('.disk1')
    let disk2 = document.querySelector('.disk2')
    let disk3 = document.querySelector('.disk3')

    let selectedDisk = null

    // Defined a variable for the user to restart the game.
    const restart = document.querySelector('.restart')


    // Created a function to restart the game.
    function restartGame() {
        location.reload();
        console.log("restart was clicked")
    }
    restart.addEventListener('click', restartGame)

    // Created functions and event listeners for the pop up instructions window.
    function openPopUp() {
        popUp.style.display = 'block';
        console.log("instructions was clicked")
    }
    instructions.addEventListener('click', openPopUp)

    function closePopUp() {
        popUp.style.display = "none"
        console.log("close was clicked")
    }
    close.addEventListener('click', closePopUp)

    // Created a function to alert the user they won the game.
    function win(level) {
        console.log("Did I win yet?")
        console.log(typeof destination.childElementCount)
        console.log(typeof this.level)
        if (destination.childElementCount === parseInt(this.level)) {
            clearInterval(timeVariable)
            alert("You won!  Select the Restart button to play again.")
        }
    }

    function countMoves() {
        moveCounter.textContent++
    }

    function moveToTower(selectedDisk) {
        console.log("selectedTower.lastElementChild is:  ")
        console.log(selectedTower.lastElementChild)
        console.log("selectedDisk.id is:  ")
        console.log(selectedDisk.id)
        if (selectedTower.lastElementChild != null && selectedTower.lastElementChild.id > selectedDisk.id) {
            alert("A larger disk can not be placed on a smaller disk.")
        } else {
            selectedTower.append(selectedDisk)
            selectedDisk.style.border = "solid"
            console.log(selectedDisk,selectedTower)
            selectedDisk = ""
            selectedTower = ""
            console.log(selectedDisk,selectedTower)
            countMoves()
            win()
        }
    }

    function moveDisk(event) {
        console.log("towerContainer was clicked")
        console.log("The event is:  ")
        console.log(event)
        console.log("The selected disk is:  ")
        console.log(selectedDisk)
        if (
            // selectedDisk === null && 
            (event.target === towers[0].lastElementChild || event.target === towers[1].lastElementChild || 
            event.target === towers[2].lastElementChild)) {
                selectedDisk = event.target
                selectedDisk.style.border = "dotted"
                console.log(selectedDisk)
            } else {
                selectedTower = event.target
                if (selectedTower === source || selectedTower === auxiliary || selectedTower === destination) {
                    moveToTower(selectedDisk)
                }
            }
        console.log("Source disk count:  " + source.childElementCount)
        console.log("Auxiliary disk count:  " + auxiliary.childElementCount)
        console.log("Destination disk count:  " + destination.childElementCount)

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

    function addDisk4 (level) {
        let disk4 = document.createElement('div')
        disk4.classList.add('disk')
        disk4.classList.add('disk4')
        disk4.innerText = 'Disk 4'
        disk4.setAttribute('id','4')
        source.appendChild(disk4);
        return disk4
    }

    function addDisk5 (level) {
        let disk5 = document.createElement('div')
        disk5.classList.add('disk')
        disk5.classList.add('disk5')
        disk5.innerText = 'Disk 5'
        disk5.setAttribute('id','5')
        source.appendChild(disk5);
        return disk5
    }

    // Created a function to set up the level, number of disks and timer. 
    function getSelectedLevel() {
        console.log("dropdownButton was clicked")
        level = document.querySelector('.dropdown').value
        let i = level - 1

        if (level === "4") {
            addDisk4()
        } else if (level === "5") {
            addDisk4()
            addDisk5()
        }
        dropdownButton.style.display = "none"
        towerContainer.addEventListener('click',moveDisk)
        timeVariable = setInterval(countTime,1000)
    }
    dropdownButton.addEventListener('click', getSelectedLevel)

})(window);