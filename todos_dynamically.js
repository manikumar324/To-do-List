/*// This is creating the Todo List in Dynamically using java script

let todoItemsContainer=document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");

let todoList=[
    {text:"Learn HTML",unique:1},
    {text:"Learn CSS",unique:2},
    {text:"Learn java Script",unique:3},
    {text:"Learn React",unique:4}
];
addTodoButton.onclick=function(){
    onaddTodo()
}
function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId)
    
    let labelElement=document.getElementById(labelId)
    labelElement.classList.toggle("checked")
}
function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
}
function createAndAppendTodo(todo){       // function definition with todo=eachitem(argument)
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoItem="todo"+todo.uniqueNo;
    
    let todoElement=document.createElement("li");                            // creation of the list element
    todoElement.classList.add("todo-item-container","d-flex","flex-row")     // adding css styles to the element
    todoElement.id=todoid;
    todoItemsContainer.appendChild(todoElement)                // appendChild means adding to the todoItemsContainer bcoz todoElement is the child element for todoItemsContainer.
    
    let inputElement=document.createElement("input");      // creation of the input element
    inputElement.type="checkbox";
    inputElement.id=checkboxId;
    inputElement.classList.add("checkbox-input");          // adding css styles to the element
    inputElement.onclick=function(){
        onTodoStatusChange(checkboxId,labelId)
    }
    todoElement.appendChild(inputElement);
    
    let labelContainer=document.createElement("div");     // creation of div element/container
    labelContainer.classList.add("label-container","d-flex","flex-row");   // adding css styles to the element
    todoElement.appendChild(labelContainer);
    
    let labelElement=document.createElement("label");
    labelElement.setAttribute("for","checkboxId");
    labelElement.classList.add("checkbox-label");        // adding css styles to the element
    labelElement.textContent=todo.text;
    labelElement.id=labelId;
    labelContainer.appendChild(labelElement);
    
    let deleteIconContainer=document.createElement("div");       // creation of div element/container
    deleteIconContainer.classList.add("delete-icon-container");  // adding css styles to the element
    labelContainer.appendChild(deleteIconContainer);
    
    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");   // adding css styles to the element
    deleteIcon.onclick=function(){
        onDeleteTodo(todoItem)
    }
    labelContainer.appendChild(deleteIcon);
}
function onaddTodo(){
    todosCount=todoList.length;
    todosCount=todosCount + 1;

    let userInputElement=document.getElementById("todoUserInput");
    let userInputValue=userInputElement.value;
    if(userInputValue === " "){
        alert("Enter Valid Input")
        return;
    }
    let newTodo={
        text:userInputValue,
        uniqueNo:todosCount
    }
    createAndAppendTodo(newTodo)
    userInputElement.value="";
}
for(let eachitem of todoList){                   // iterating with the loop using (for..of..loop)
    createAndAppendTodo(eachitem);           // calling the createAndAppend() function with argument eachitem
}
*/

/*let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");
let todoList = [ {text: "Learn HTML",uniqueNo:1},
                {text: "Learn CSS",uniqueNo:2},
                {text: "Learn JavaScript",uniqueNo:3},
                {text: "Learn React JS",uniqueNo:4}
];
addTodoButton.onclick=function(){
    onAddTodo()
}
function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement=document.getElementById(checkboxId)
   
    let labelElement=document.getElementById(labelId)
   labelElement.classList.toggle("checked")
}

function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
}
function createAndAppendTodo(todo) {
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;
    
  let todoElement = document.createElement("li");
  todoElement.id=todoId;
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick=function(){
      onTodoStatusChange(checkboxId,labelId)
  }
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for",checkboxId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id=labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick=function(){
      onDeleteTodo(todoId);
  }
  deleteIconContainer.appendChild(deleteIcon);
}
function onAddTodo(){
    let todosCount=todoList.length;
    todosCount=todosCount+1;
    
    let userInputElement=document.getElementById("todoUserInput");
    let userInputValue=userInputElement.value;
    if(userInputValue === ""){
        alert("Enter Valid Input")
        return;
    }
    let newTodo={
        text:userInputValue,
        uniqueNo:todosCount
    }
    createAndAppendTodo(newTodo);
    userInputElement.value=""
}
for (let todo of todoList) {
  createAndAppendTodo(todo);
}*/

/*let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function () {
  onAddTodo();
};
*/

/*let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");
 
function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}
 
let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;
 
saveTodoButton.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
 
function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;
 
  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }
 
  todosCount = todosCount + 1;
 
  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}
 
addTodoButton.onclick = function () {
  onAddTodo();
};
 
function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
  let deleteIndex=todoList.findIndex(function(eachtodo){
     let eachTodoId="todo"+eachtodo.uniqueNo;
     if(eachTodoId === todoId){
         return true;
     }
     else{
         return false;
     }
  });
  todoList.splice(deleteIndex,1)
}
 
function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");
}
 
function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
 
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);
 
  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
 
  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
  };
 
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);
 
  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);
 
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);
 
  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);
 
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
 
  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };
 
  deleteIconContainer.appendChild(deleteIcon);
}
 
for (let todo of todoList) {
  createAndAppendTodo(todo);
}
*/

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
    isChecked: false
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function() {
  onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;

    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObject = todoList[todoObjectIndex];

  if(todoObject.isChecked === true){
    todoObject.isChecked = false;
  } else {
    todoObject.isChecked = true;
  }

}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  let deleteElementIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  todoList.splice(deleteElementIndex, 1);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.checked = todo.isChecked;

  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId, todoId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  if (todo.isChecked === true) {
    labelElement.classList.add("checked");
  }
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}