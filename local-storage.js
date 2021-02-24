
// // LOCAL STORAGE

// localStorage.setItem("todo", "feed the dog");
// localStorage.setItem("user", "Kris");
// localStorage.setItem("todo", "feed myself");


// // SESSION STORAGE
// sessionStorage.setItem("todoList", "session feeding dog");

// // GETTING STUFF BACK
// const user = localStorage.getItem("user");

// console.log(user)

const todoList = ["feed the dog", "wash", listen to some Jazz music"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = localStorage.getItem("todos");

console.log(retrieved);

