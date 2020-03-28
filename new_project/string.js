const firstName = 'Sardor';
const lastName = 'Abdulkhamidov';
const age = 27;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;

str = '<ul>' +
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';

// console.log(str);

// ES6
str = `
  <ul>
    <li>First name: ${ firstName }</li>
    <li>Last name: ${ lastName }</li>
    <li>Age: ${ age }</li>
    <li>Math.random: ${ Math.random() }</li>
    <li>5 + 5: ${ 5 + 5 }</li>
  </ul>
`;

document.body.innerHTML = str;

