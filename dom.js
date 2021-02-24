// node lists don't update themselves but HTML collections do

const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todoList");
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement('li');
newItem.classList.add("item");
newItem.innerText = "Item 4";

todolist.appendChild(newItem);

//Update the amount of items that we have