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
    const closeError = document.querySelector('.closeError')
    

    // Defined variables for the Error pop up window.
    const errorPopUp = document.querySelector('#errorPopUp')
    const popUpListError = document.querySelector('.popUpListError')
    const errorLargerDisk = 'A larger disk can not be placed on a smaller disk.'
    const errorDiskNotSelected = 'Select a disk before a tower can be selected.'

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

    // Defined variables for the three towers that will be used when moving the disks.
    let towerContainer = document.querySelector('.towerContainer')
    let source = document.querySelector('#source')
    let auxiliary = document.querySelector('#auxiliary')
    let destination = document.querySelector('#destination')
    let selectedDisk

    // Defined a variable for the user to restart the game.
    const restart = document.querySelector('.restart')

    // Created a function to restart the game.
    function restartGame() {
        location.reload();
    }
    restart.addEventListener('click', restartGame)

    // Created functions and event listeners for the pop up instructions window.
    function openPopUp() {
        instructionPopUp.style.display = 'block'
    }
    instructions.addEventListener('click', openPopUp)

    function closePopUp() {
        instructionPopUp.style.display = "none"
    }
    close.addEventListener('click', closePopUp)

    // Created functions and event listeners for the pop up error window.
    function openErrorPopUp(errorMessage) {
        popUpListError.innerText = errorMessage
        errorPopUp.style.display = 'block'
    }

    function closeErrorPopUp() {
        errorPopUp.style.display = "none"
    }
    closeError.addEventListener('click', closeErrorPopUp)

    // Created a function to alert the user they won the game.
    function win() {
        if (destination.childElementCount === parseInt(this.level)) {
            let message = document.querySelector('.message')
            message.style.display = "block"
            restartMessage.style.display = "block"
            clearInterval(timeVariable)
            instructions.removeEventListener('click', openPopUp)
            dropdownButton.removeEventListener('click',getSelectedLevel)
            towerContainer.removeEventListener('click',moveDisk)
        }
    }

    // Created a function to move disks to the selected tower.
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
        console.log(event.target === null)
        if (event.target === source.lastElementChild || event.target === auxiliary.lastElementChild || 
            event.target === destination.lastElementChild) {
            selectedDisk = event.target
            selectedDisk.style.border = "3px black dashed"
        } else {
            selectedDisk
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

    // Created functions to add the selected number of disks to the game.
    function addDisk4() {
        let disk4 = document.createElement('div')
        disk4.classList.add('disk')
        disk4.classList.add('disk4')
        disk4.innerText = 'Disk 4'
        disk4.setAttribute('id','4')
        source.appendChild(disk4)
    }
    function addDisk5() {
        let disk5 = document.createElement('div')
        disk5.classList.add('disk')
        disk5.classList.add('disk5')
        disk5.innerText = 'Disk 5'
        disk5.setAttribute('id','5')
        source.appendChild(disk5)
    }
    function addDisk6() {
        let disk6 = document.createElement('div')
        disk6.classList.add('disk')
        disk6.classList.add('disk6')
        disk6.innerText = 'Disk 6'
        disk6.setAttribute('id','6')
        source.appendChild(disk6)
    }
    function addDisk7() {
        let disk7 = document.createElement('div')
        disk7.classList.add('disk')
        disk7.classList.add('disk7')
        disk7.innerText = 'Disk 7'
        disk7.setAttribute('id','7')
        source.appendChild(disk7)
    }
    function addDisk8() {
        let disk8 = document.createElement('div')
        disk8.classList.add('disk')
        disk8.classList.add('disk8')
        disk8.innerText = 'Disk 8'
        disk8.setAttribute('id','8')
        source.appendChild(disk8)
    }

    // Created a function to set up the level, number of disks and timer. 
    function getSelectedLevel() {
        level = document.querySelector('.dropdown').value
        let i = level - 1

        if (parseInt(level) > 3) {
            addDisk4()
            if (parseInt(level) > 4) {
                addDisk5()
                if (parseInt(level) > 5) {
                    addDisk6()
                    if (parseInt(level) > 6) {
                        addDisk7()
                        if (parseInt(level) > 7) {
                            addDisk8()
                        }
                    }
                }
            }
        } 

        levelDiv.style.display = "none"
        towerContainer.style.display = "flex"
        towerContainer.addEventListener('click',moveDisk)
        timeVariable = setInterval(countTime,1000)
    }
    dropdownButton.addEventListener('click', getSelectedLevel)

})(window);