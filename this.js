// A POINTER -> IT REFERS TO AN OBJECT

const user = {
    name: "Kristian Zwart",
    sayHi() {
        console.log(this);
    }
};

user.sayHi();