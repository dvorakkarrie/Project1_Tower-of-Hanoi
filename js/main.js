// Project #1: Build a Game with HTML, CSS and JavaScript
// Requirements:
//  - Render in the browser
//  - Include separate HTML / CSS / JavaScript files
//  - Use Javascript for DOM manipulation
//  - Be deployed online, using Github Project pages and/or to a custom domain.
//  - Use semantic markup for HTML and CSS (adhere to best practices)
//  - Show a good commit history with frequent commits
//  - Additionally, your project should stick with KISS (Keep It Stupid Simple) and DRY (Don't Repeat Yourself) principles.

const instructions = document.querySelector('.instructions')
const popUp = document.querySelector('#myPopUp')
const close = document.querySelector('.close')
const numberOfDisks = document.querySelector('numberOfDisks')
const diskDropdown = document.querySelector('dropdown')

instructions.addEventListener('click', openPopUp)

function openPopUp {
    popUp.getElementsByClassName.display = 'block';
}




