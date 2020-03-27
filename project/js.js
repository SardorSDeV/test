if(2*4 == 7){
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
}

/*while (num < 55){
    console.log(num);
    num++;
}*/

do{
    console.log(num);  
    num++;
}
while(num < 55);

for (let i = 1; i < 8; i++){
   if(i == 6){
       continue;
   }
    console.log(i);
}
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


let calc = (a,b) => a+b
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
console.log(Math.round(twelve));
