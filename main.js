const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const text = document.getElementById("text-score");
let score = 0


document.addEventListener("keydown", function(event){
    jump();
})


function jump(){
    if (dino.classList !="jump"){
        dino.classList.add("jump")
    }
    setTimeout( function(){
        dino.classList.remove("jump")
    }, 500)
}

let calculate = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft <80 && cactusLeft > 0 && dinoTop < 150){
    score++;
    text.innerHTML = score
    }
}, 100)
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    

    if(cactusLeft < 80 && cactusLeft > 0 && dinoTop >= 150) {
        alert("GAME OVER")
        location.reload()
    }
    
}, 10)

    