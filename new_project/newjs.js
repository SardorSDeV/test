//function
function firstFunc(arr, handler) {
  let res = 'New value:';
  for (let i = 0; i < arr.length; i++) {
    res += handler(arr[i]);
  }
  return res;
}
const res1 = firstFunc(['hello', 'my', 'name', 'is', 'Sardor'], function (item) {
  return item[0].toUpperCase() + item.slice(1);
});
const res2 = firstFunc([10, 20, 30], function (item) {
  return item * 10 + ' ';
});
console.log(res2);
console.log(res1);

//if else 


let value = 'visible';

if (value == 'visible') {
  value = 'visible';
} else {
  value = 'hidden';
}

value = value === 'hidden' ? 'visible' : 'hidden';

//2

let num = -2;
if (num === 0) {
  num = 1;
} else if (num < 0) {
  num = 'less then zero';
} else if (num > 0) {
  num *= 10;
}

//3

let car = {
  name: 'Lexus',
  age: 10,
  create: 2007
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
//4

let item = {
  name: 'Intel Core i 7',
  price: '100$',
  discount: '15%'
};
let price = parseFloat(item.price);
let discount = parseFloat(item.discount);
let isValid = !isNaN(discount) && isNaN(price);
//console.log(isValid);
if (isValid) {
  item.priceWithoutDiscount = (price * (100 - discount)) / 100;
  console.log(item.priceWithoutDiscount);
} else {
  console.log(item.price);
}