// A POINTER -> IT REFERS TO AN OBJECT

const user = {
    name: "Kristian Zwart",
};
const admin = {
    name: "admin"
};

function sayHi() {
    console.log(this);
}

user.hi = sayHi;
admin.hi = sayHi;

user.hi();