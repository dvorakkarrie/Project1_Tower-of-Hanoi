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
    // Defined variables for the Instructions pop up window.
    const instructions = document.querySelector('.instructions')
    const instructionPopUp = document.querySelector('#instructionPopUp')
    const close = document.querySelector('.close')
    
    // Defined variables for the Error pop up window.
    const errorPopUp = document.querySelector('#errorPopUp')
    const popUpListError = document.querySelector('.popUpListError')
    const closeError = document.querySelector('.closeError')
    const errorLargerDisk = 'A larger disk can not be placed on a smaller disk.'
    const errorDiskNotSelected = 'A disk needs to be selected before selecting a tower.'


    // Defined variables for the user to select the desired number of disks.
    const levelDiv = document.querySelector('.level')
    const dropdownButton = document.querySelector('.dropdownButton')

    // Defined variables to count the moves and time it takes for the player to complete the game.
    const moveCounter = document.querySelector('#moves-counter')
    let timeCounter = document.querySelector('#time-counter')
    let minutes = 0
    let seconds = 0
    let timeString
    let timeVariable

    // Defined an array of the disks that can be added in a for loop based upon the user's selection.
    let diskArray = ['disk1','disk2','disk3','disk4','disk5','disk6','disk7','disk8']

    // Defined varialbes for the game board and disk selected during the game.
    let towerContainer = document.querySelector('.towerContainer')
    let selectedDisk

    // Defined variables for the three towers that will be used when moving the disks.
    let source = document.querySelector('#source')
    let auxiliary = document.querySelector('#auxiliary')
    let destination = document.querySelector('#destination')

    // Defined a button variable for the user to select and restart the game.
    const restartButton = document.querySelector('.restartButton')

    // Created an event listener with a function to restart the game.
    restartButton.addEventListener('click', () => location.reload())

    // Created functions and event listeners for the Instructions pop up window.
    function openPopUp() {
        instructionPopUp.style.display = 'block'
    }
    instructions.addEventListener('click', openPopUp)

    // Created an event listener with function to close the instructions pop up window.
    close.addEventListener('click', () => instructionPopUp.style.display = "none")

    // Created functions and event listeners for the Error pop up window.
    function openErrorPopUp(errorMessage) {
        popUpListError.innerText = errorMessage
        errorPopUp.style.display = 'block'
    }
    
    // Created an event listener and function to close the error message pop up window.
    closeError.addEventListener('click', () => errorPopUp.style.display = "none")

    // Created a function to alert the user they won the game and play again by selecting the restart button.
    function win() {
        if (destination.childElementCount === parseInt(this.level)) {
            let message = document.querySelector('.message')
            message.style.display = "block"
            restartMessage.style.display = "block"

            // Created function to stop the time counter.
            clearInterval(timeVariable)

            // Event listeners created to block user from opening pop up windows and selecting disks.
            instructions.removeEventListener('click', openPopUp)
            dropdownButton.removeEventListener('click',getSelectedLevel)
            towerContainer.removeEventListener('click',moveDisk)
        }
    }

    // Created a function to move disks to the selected tower, increment a move counter and if user won after ensuring disks are in the correct order.
    function moveToTower(selectedDisk) {
        if (selectedTower.lastElementChild != null && selectedTower.lastElementChild.id > selectedDisk.id) {
            openErrorPopUp(errorLargerDisk)
        } else {
            selectedTower.append(selectedDisk)
            selectedDisk.style.border = "3px black solid"
            moveCounter.textContent++, 
            win()
        }
    }

    // Created a function to identify the disk or tower that was selected before moving the disk.
    function moveDisk(event) {
        if (event.target === source.lastElementChild || event.target === auxiliary.lastElementChild || 
            event.target === destination.lastElementChild) {
            selectedDisk = event.target
            selectedDisk.style.border = "3px black dashed"
        } else {
            selectedTower = event.target
            if (selectedDisk && (selectedTower === source || selectedTower === auxiliary || selectedTower === destination)) {
                moveToTower(selectedDisk)
            } else {
                openErrorPopUp(errorDiskNotSelected)
            }
        }
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

    function addNewDisk(i) {
        j = i + 1
        diskArray[i] = document.createElement('div')
        diskArray[i].classList.add('animated','slow','slideInDown','disk','disk' + j)
        diskArray[i].innerText = "Disk"
        diskArray[i].setAttribute('id',j)
        source.appendChild(diskArray[i])
    }

    // Created a function to set up the level, number of disks and begin counting time. 
    function getSelectedLevel() {
        level = document.querySelector('.dropdown').value

        for (let i = 0; i < level; i ++) {
            addNewDisk(i)
        }

        levelDiv.style.display = "none"
        towerContainer.style.display = "flex"
        restartButton.style.display = "flex"
        towerContainer.addEventListener('click',moveDisk)
        timeVariable = setInterval(countTime,1000)
    }
    dropdownButton.addEventListener('click', getSelectedLevel)

})(window);