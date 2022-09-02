let btnDecrease = document.getElementById("btn-decrease");
let btnReset = document.getElementById("btn-reset");
let btnIncrease = document.getElementById("btn-increase");
let counter = document.getElementById("counter");
let count = 0;

function loaded(){
    btnDecrease.addEventListener("click", decrease)
    btnReset.addEventListener("click", reset)
    btnIncrease.addEventListener("click", increase)
}

function decrease(){
    count -= 1;
    console.log(count);
}