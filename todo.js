const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS = "todos";
let toDos = [];

function removeToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //선택한 li만 빼고 나머지를 toDos에 저장하는 코드 만들기
    const toDoFilter = toDos.filter(function(text){
        return text.id !== parseInt(li.id);
    });
    toDos = toDoFilter;
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText= "X";
    span.innerText= text;
    const newId = toDos.length+1;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id= newId;
    const toDoObj ={
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveTodo();
    delBtn.addEventListener("click", removeToDo);
}

function toDoHandleSubmit(event){
    event.preventDefault();
    const toDoValue = toDoInput.value;
    paintToDo(toDoValue);
    toDoInput.value = "";
}


function loadTodo(){
    const currentToDo = localStorage.getItem(TODOS);
    if(currentToDo !== null){
        const parsedToDo = JSON.parse(currentToDo);
        parsedToDo.forEach(function(obj){
            paintToDo(obj.text);
        });
        
        }
        // toDos에 들어있는 오브젝트들을 가지고와서 paintToDo라는 것을 적용해서 나타낸다.
}

function init(){
    loadTodo();
    toDoForm.addEventListener("submit", toDoHandleSubmit);

}
init();