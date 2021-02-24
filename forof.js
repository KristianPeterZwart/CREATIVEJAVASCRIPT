
const names = ['Kris Zwart', 'Joe Jer', 'MF Doom', 'Kurt'];

for (let name of names){
    if(name === 'Joe Jer'){
        console.log('Stop this madness')
        break;
    }
    console.log(name);
}
// 
SPECIFICALLY FOR ARRAYS WITH
// 
names.forEach(function (name, index) {
    console.log(name, index);

})