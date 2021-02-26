// Constructor Function

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
    this.getTodoName = function(){
        return this.name;
    }
}

const todo = new Todo("Buy Chicken", false);
const todo2 = new Todo("Do my Homework", false)

console.log(todo, todo2);

