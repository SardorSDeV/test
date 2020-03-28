const user = {
  firstName: 'Sardor',
  secondName: 'Abdulkhamidov',
  age: 27,
  isAdmin: true,
  email: 'sardor5676626@gmail.com',
  'user-address': {
    city: 'Tashkent'
  },
  skills: ['html', 'css', 'js','python','php']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user.secondName;
value = user.isAdmin;
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address:city'];
value = user[prop][0];

user.firstName = 'Sardor';

value = user.firstName;

user.info = 'SDeV';

value = user.info;

user['user-address'].city = 'Tashkent';
user['user-address'].country = 'Uzbekistan';

console.log(user.plan);
user.plan = {};
user.plan.basic = 'basic';

console.log(value);
console.log(user);
