
// const sayHello = function(){
    // console.log("Hi")
// };
// 
// sayHello();
// 
// How we used to do it
const newVideos = videos.map(function(video) {
    return video.length < 10 ? video : "nope";
});

// Using arrow functions
const arrowVideos = videos.map((video) => {
    return video.length < 10 ? video : "nope";
});

console.log(arrowVideos);