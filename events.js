const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");

// const items = todoList.children;
// 
// // CLICK, SCROLL. RESIZING THE BROWSER

// // ATTACH A EVENT LISTENER

// button.addEventListener("click", function() {
//     const newItem = document.createElement("li");
//     newItem.classList.add("item");
//     newItem.innerText = `item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;
// })

button.addEventListener("click", function() {
 mainTitle.classList.add("spectacular")
});
