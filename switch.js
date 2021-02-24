// // use switch to shorten if else statements

// const text = 'kiwi'
// let fruitNr = 2

// switch(text) {
//     case 'banana':
//         console.log('Wow I Love bananas too')
//         fruitNr = 1;
//         break;
//     case 'apple':
//         console.log(`I don't like apples you are crazy`)
//         fruitNr = 2;
//         break;
//     case 'avocado':
//         console.log('What fruit is this?!') 
//         fruitNr = 3
//         break;   
//     default:
//         console.log('What fruit is that?')
// }


let userInput = prompt('Tell me a fruit')
let convertedValue = userInput.toLowerCase()

switch(convertedValue) {
    case 'kiwi':
        console.log('Kiwi is the first food invented by the ocean boys')
        break;
    case 'banana':
        console.log('My fiancee loves bananas')
        break;
    case 'apple':
        console.log('Depends on what Apple you buy you can go bankrupt')
        break;  
    default:
        console.log('That fruit is unknown to me') 
        break;    
}
