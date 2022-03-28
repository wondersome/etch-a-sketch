let color = 'black'
let click = true

function populateBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.style.background = "white"
        board.insertAdjacentElement('beforeend', square)
    }
}

populateBoard(16)

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'
        populateBoard(input)
    } else {
        document.querySelector('.error').style.display = 'flex'
    }
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice
}

document.querySelector('body').addEventListener('click', () => {
    click = !click
})