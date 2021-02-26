

// FUNCTIONS -> SPECIAL OBJECT
// BIND CALL APPLY

const person = { 
    firstName: "Kris",
    lastName: "Zwart",
    getName() {
        console.log(this.firstName + this.lastName);
    }
};

function registerUser(country, lang) {
    //Additional functionality...
    this.getName()
    console.log(`My country is ${country} and my language is ${lang}`);
}

// const register = registerUser.bind(person);
// register("Spain", "English");

registerUser.call(person, "England", "English");
registerUser.apply(person, ["England", "English"])
