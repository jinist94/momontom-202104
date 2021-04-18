
const currentTime= document.querySelector(".js-clock").querySelector("h1");

function clockLoad(){
    const date = new Date();
    const hours = date.getHours();
    const minuts = date.getMinutes();
    const seconds = date.getSeconds();
    currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minuts < 10 ? `0${minuts}` : minuts}:${seconds < 10 ? `0${seconds}` : seconds}`;

}


function init(){
    clockLoad();
    setInterval(clockLoad, 1000); // 일정 사간마다 해당 함수를 반복 시켜줌/ 함수이름, 시간간격
}
init();