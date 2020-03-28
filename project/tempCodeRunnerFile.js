
let timerID = setTimeout(function log(){
    console.log("Hello!");
    setTimeout(log,2000);
});