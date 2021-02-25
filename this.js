// A POINTER -> IT REFERS TO AN OBJECT

const user = {
    name: "Kristian Zwart",
};
const admin = {
    name: "admin"
};

function yell() {
    console.log(this.name.toUpperCase());
}

user.yell = yell;
admin.yell = yell;

user.yell();
admin.yell();