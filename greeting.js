
const nameForm = document.querySelector(".js-nameForm"),
nameInput = nameForm.querySelector("input"),
greeting = document.querySelector(".js-greetings"),
greetingWrap = document.querySelector(".js-greetings-wrap"),
modBtn = greetingWrap.querySelector("button");

const USER_NAME = "userName",
SHOWING_CS = "showing",
FLEXING_CS = "flexing";


function saveName(text){
   localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event){
   event.preventDefault();
   const currentValue = nameInput.value;
   saveName(currentValue);
   paintGreeting(currentValue);
}

function handleMod(){
   localStorage.removeItem(USER_NAME);
   greetingWrap.classList.remove(FLEXING_CS);
   nameInput.value="";
   askForName();
}

function askForName(){
    nameForm.classList.add(SHOWING_CS);
    nameForm.addEventListener("submit", handleSubmit);///input 말고 form에 적용해야함!
}

function paintGreeting(text){
   nameForm.classList.remove(SHOWING_CS);
   greetingWrap.classList.add(FLEXING_CS);
   greeting.innerText = `Hello! ${text}`;

   modBtn.addEventListener("click", handleMod);
   
}



function loadName(){
    const userName = localStorage.getItem(USER_NAME);
    if(userName === null){
        askForName();
    }else{
       paintGreeting(userName);
    }
}


function init(){
   loadName();

}
init();