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


const isAllNumbers = [2, 3, 4, 5].every(function (num) {
  return typeof num === 'number';
});
console.log(isAllNumbers);


function every(arr, handler) {
  for (let i = 0; i < arr.length; i++) {
    if (!handler(arr[i])) {
      return false;
    }
  }
  return true;
}

const isNum = every([2, 3, 4, 5], function (num) {
  return typeof num === 'number';
});
console.log(isNum);


let prod1 = {
  price: 20,
  counts: 100,
  getTotalPrice() {
    return this.price * this.counts;
  },
};

let prod2 = {
  price: 10,
  counts: 50
};

prod1.getTotalPrice.call(prod2);

let sizes = {
    width: 5,
    height: 10
  },
  getSquare = function () {
    return this.width * this.height;
  };
getSquare.call(sizes);

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();


//method 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = arr.map(num => {

//   return {
//     digit: num,
//     odd: Boolean(num % 2),
//   };
// });

const newArr = arr.map(num => ({
  digit: num,
  odd: Boolean(num % 2),

}));
console.log(newArr);


const stringArr = [{
    char: 'a',
    index: 12
  },
  {
    char: 'w',
    index: 8
  },
  {
    char: 'y',
    index: 10
  },
  {
    char: 'p',
    index: 3
  },
  {
    char: 'p',
    index: 2
  },
  {
    char: 'N',
    index: 6
  },
  {
    char: ' ',
    index: 5
  },
  {
    char: 'y',
    index: 4
  },
  {
    char: 'r',
    index: 13
  },
  {
    char: 'H',
    index: 0
  },
  {
    char: 'e',
    index: 11
  },
  {
    char: 'a',
    index: 1
  },
  {
    char: ' ',
    index: 9
  },
  {
    char: '!',
    index: 14
  },
  {
    char: 'e',
    index: 7
  },
];

// function getStringFromArray(arr) {
//   const copyArr = arr.slice();
//   const sortedArr = copyArr.sort((prev, next) => prev.index - next.index);
//   const strFromArr = sortedArr.reduce((acc, current) => {
//     return acc += current.char;
//   }, '');
//   return strFromArr;
// }
// getStringFromArray(stringArr);
function getStringFromArray(arr) {
  if (Array.isArray(arr)) {
    return;
  }
  return arr.slice().sort((prev, next) => prev.index - next.index)
    .reduce((acc, current) => (acc += current.char), '');
}
getStringFromArray(stringArr);

const products = [{
    title: 'prod1',
    price: 5.2
  },
  {
    title: 'prod2',
    price: 0.18
  },
  {
    title: 'prod3',
    price: 15
  },
  {
    title: 'prod4',
    price: 25
  },
  {
    title: 'prod5',
    price: 18.9
  },
  {
    title: 'prod6',
    price: 8
  },
  {
    title: 'prod7',
    price: 19
  },
  {
    title: 'prod8',
    price: 63
  },
];

function filterCollection(arr, min, max) {

  return arr.slice().sort((prev, next) => prev.price - next.price)
    .filter((product) => product.price >= min && product.price <= max);
}
filterCollection(products, 15, 30);

function minus(num1) {
  return function (num2) {
    return num1 - num2;
  };
}

function multiply(num1) {
  return function (num2) {
    return (num1 *= num2);
  };
}

const module1 = (function () {
  let str = '';

  function setString(value = "") {
    str = String(value);
    return str;
  }

  function getString() {
    return str;
  }

  function getStringLength() {
    return str.length;
  }

  function reverseString() {
    return str.split('').reverse().join('');
  }
  return {
    setString,
    getString,
    getStringLength,
    reverseString
  };
})();

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

//array
