
// const videos = [
// "Pranking my sister, is she okay (gone wrong)", 
// "how to javascript", 
// "html tutorial", 
// "learning the piano"
// ];
// 
// videos.push('good morning')
// 
// videos.forEach(function(video) {
// console.log("run");
// console.log(videos);
// });


function repeater(fn) { // Higher order function
    fn();
    fn();
    fn();
    fn();
}

function sayHello(){
    console.log("Hello there!")

repeater(sayHello);
}