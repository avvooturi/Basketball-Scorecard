let buttonfirst = document.getElementById("square1")
let buttonsecond = document.getElementById("square2")

console.log(buttonfirst)

let homeonefirst = 0
let guestonefirst = 0

//Home set of scoring commands.

function firstbuttonfirst() {
    homeonefirst = homeonefirst + 1
    buttonfirst.innerText = homeonefirst
}

function secondbuttonfirst() {
    homeonefirst = homeonefirst + 2
    buttonfirst.innerText = homeonefirst
}

function thirdbuttonfirst() {
    homeonefirst = homeonefirst + 3
    buttonfirst.innerText = homeonefirst
}

//Guest set of scoring commands.

function firstbuttonsecond() {
    guestonefirst = guestonefirst + 1
    buttonsecond.innerText = guestonefirst
}

function secondbuttonsecond() {
    guestonefirst = guestonefirst + 2
    buttonsecond.innerText = guestonefirst
}

function thirdbuttonsecond() {
    guestonefirst = guestonefirst + 3
    buttonsecond.innerText = guestonefirst
}