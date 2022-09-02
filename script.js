let btns = document.querySelectorAll(".btns");
let counter = document.querySelector("#counter")
let count = 0;

function loaded(){
    btns[0].addEventListener("click", menos)
    btns[1].addEventListener("click", reset)
    btns[2].addEventListener("click", mais)
}

function menos(){
    count -= 1
    counter.innerHTML = count;
    if(count > 0){
        let c = document.getElementById("counter").style.color = "blue"
    } else if (count < 0){
        let c = document.getElementById("counter").style.color = "red"
    } else {
        let c = document.getElementById("counter").style.color = "green"
    }
}

function reset(){
    count *= 0;
    counter.innerHTML = count;
    if(count > 0){
        let c = document.getElementById("counter").style.color = "blue"
    } else if (count < 0){
        let c = document.getElementById("counter").style.color = "red"
    } else {
        let c = document.getElementById("counter").style.color = "green"
    }
}

function mais(){
    count += 1
    counter.innerHTML = count;
    if(count > 0){
        let c = document.getElementById("counter").style.color = "blue"
    } else if (count < 0){
        let c = document.getElementById("counter").style.color = "red"
    } else {
        let c = document.getElementById("counter").style.color = "green"
    }
}

