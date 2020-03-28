// while, do while, for, for of, for in

// let i = 10;
// while(i--) {
//   console.log(i);
// }

// do {
//   console.log('action');
// } while(i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

const users = [
  {
    name: 'Sardor',
    age: 27
  },
  {
    name: 'Alisher',
    age: 28
  },
  {
    name: 'Shuhrat',
    age: 27
  },
  {
    name: 'Komoliddin',
    age: 28
  },
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i];
}

// console.log(usersObj['Denis']);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

for (let value of users) {
  console.log(value);
}






