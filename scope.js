// USING VAR IS OUTDATED AND DANGEROUS

// GLOBAL SCOPE
    let food = 'apple'
    let fruits = 5
    var x = 5


function store() {
    // FUNCTION SCOPE
    let food = "banana"
    let fruits = 50
    var x = 5
}


    // BLOCK SCOPE
// for (let x = 0; x < 10; x++) {
    // console.log(fruits)
// }
// 
console.log("Global" + x)
