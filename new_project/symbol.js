const firstName = 'Sardor';
const lastName = 'Abdulkhamidov';
const age = 27;
const str = 'Hello my name is Sardor';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('n', 10);
value = str.indexOf('!');
value = str.includes('Sardor');

value = str.slice(0, 5);
value = str.slice(0, -3);

value = str.replace('Sardor', 'SDeV');


console.log(value);