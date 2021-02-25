// A POINTER -> IT REFERS TO AN OBJECT

// const user = {
//    name: "Kristian Zwart",
// };
// const admin = {
    // name: "admin"
// };
// 
// function yell() {
    // console.log(this.name.toUpperCase());
// }
// 
// user.yell = yell;
// admin.hi = yell;
// 
// user.yell();
// admin.yell();

const lists = document.querySelectorAll("li");


lists.forEach(li => {
    li.addEventListener("click", function() {
    console.log(this);    
    });
});