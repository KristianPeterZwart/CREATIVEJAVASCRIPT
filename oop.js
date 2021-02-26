// Constructor Function

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
    this.getTodoName = function(){
      console.log(this.name);
    }
}

const todo = new Todo("Buy Chicken", false);
const todo2 = new Todo("Do my Homework", false);

todo.getTodoName();
todo2.getTodoName();
