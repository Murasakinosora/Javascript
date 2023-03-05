//document.getElementById("count-el").innerText = 5;  - changing h2 innerText by getting through ID

//creating variables in javascript
let count = 0;
let past = ""
let countEl = document.getElementById("count-el");
let pastEn = document.getElementById("pastEn");
console.log("count");

//basic operations in javascript
//let myAge = 22;
//let humanDogRatio = 7;
//let dogAge = myAge * humanDogRatio;

//creating functions to trigger onclick events
function increment(){
    count += 1;
    //DOM manipulation [Document Object Model]
    countEl.innerText = count;
}

function save(){
    // adding previous count to past entries before emptying the count variable
    past += count + "-";
    count = 0;
    // resetting the displayed numbers and putting new values on screen
    countEl.innerText = count;
    pastEn.innerText = past;
}