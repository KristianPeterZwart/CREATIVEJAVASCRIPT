// // Constructor Function never 
// attach methods directly inside constructor function - attach to prototype

// function Todo(name, completed) {
    // this.name = name;
    // this.completed = completed;
// }

// Todo.prototype.getTodoName = function() {
    // console.log(this.name);
// };

// const todo = new Todo("Buy Chicken", false);
// const todo2 = new Todo("Do my Homework", false);

// todo.getTodoName();
// todo2.getTodoName();

const arr = new Array(1, 2, 3, 4, 5);

const arr2 = [1, 2, 3, 4]

arr.push(6)

console.log(arr);
