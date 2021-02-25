
// SORT SORTING STRINGS IS EASY ALPHABETICALLY - NUMBERS ARE DIFFERENT - 

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// items.sort();

// Return is negative a is sorted before b
// Positive b is sorted before a is sorted
// If they are the same is 0 then nothing changes
// ascending a - b descending b - a

// ratings.sort(function(a, b){
    // return a - b;
// });
// 
// console.log(ratings);

ratings.sort((a, b) => a - b)

console.log(ratings);