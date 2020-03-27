/*if(2*4 == 7){
    console.log("True");
}else{
    console.log("False");
}

let num = 50;
if (num<49){
    console.log("False!");
}else if(num>100){
    console.log("More!");
}else{
    console.log("True!");
}
(num==50)?console.log("True!") : console.log("False!");

switch(num){
    case num < 49:
        console.log("False!"); 
        break;
    case num > 100:
        console.log("More!");
        break;
    case num > 80:
        console.log("just More!");
        break;
    case 50:
        console.log("True!");
        break;
    default:
        console.log("Error");
        break;
}*/

/*while (num < 55){
    console.log(num);
    num++;
}*/

/*do{
    console.log(num);  
    num++;
}
while(num < 55);

for (let i = 1; i < 8; i++){
   if(i == 6){
       continue;
   }
    console.log(i);
}*/

/*let numBER = 20;
function showFirstMessage(text){
    alert(text);
    let numBER = 10;
    console.log(numBER);
}
showFirstMessage("MyText");
console.log(numBER);*/

//let calc = function (a,b){
//    return (a+b);
//}

//functions
/*let calc = (a,b) => a+b
console.log(calc(3,4));
console.log(calc(8,4));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let twelve = "12.2";
console.log(Math.round(twelve));*/

//call back functions

/*function first(){
    setTimeout( function(){
    console.log(1);
    }, 500);
}
function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log("I learn" + " " + lang);
    callback();
}*/

//learnJS("JavaScript",function(){
//    console.log("I've passed 3rd lesson!");
//});

/*function done(){
    console.log("I've passed 3rd lesson!");
}
learnJS("JavaScript",done);*/

//Objects 

/*let options = {
    width: 120,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;
console.log(options);

for(let key in options){
    console.log('Свойство ' + key + '  имеет значения  '+ options[key]);
}
console.log(Object.keys(options).length);*/

//arrays 

/*let arr = [1,2,3,4,5,6];
arr.pop();
arr.push("6");
arr.shift();
arr.unshift("1");
arr[99] = 99;
console.log(arr.length);
console.log(arr);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/

//foreach
 
/*arr.forEach(function(item, i, mass){
    console.log(i + ': ' + item + "(array: " + mass + ")");
});*/

/*let mass = [1,3,5,7];

for(let key of mass){
    console.log(key);
}


let ans = prompt("", ""),
    array = [];

array = ans.split(',');
console.log(array);*/
//method join
/*let arr = ['awe',"zzz",'pp',"qwerty"],
    i = arr.join(',');
console.log(i,arr);*/

//method sort
/*let arr = ['awe',"zzz",'pp',"qwerty"],
    i = arr.sort();
console.log(arr,i);*/

//method sort with callback function
/*let arr = [1,15,4],
    i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}
console.log(i);*/