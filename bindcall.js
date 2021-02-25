

// FUNCTIONS -> SPECIAL OBJECT
// BIND CALL APPLY

const person = { 
    firstName: "Kris",
    lastName: "Zwart",
    getName() {
        console.log(this.firstName + this.lastName);
    }
};

function registerUser() {
    //Additional functionality...
    console.log(this);
}

const register = registerUser;

console.log(registerUser.bind(person));