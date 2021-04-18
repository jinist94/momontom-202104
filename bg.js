const body = document.querySelector("body");
const IMG_NUMBER = 3;




function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function loadBg(num){
    const img = new Image;
    img.src= `images/${num}.jpg`
    body.append(img)
    img.classList.add("bg");

    
}


function init(){
    const randomNumber = genRandom();
    loadBg(randomNumber);
}
init();