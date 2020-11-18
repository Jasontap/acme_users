const faker = require('faker');

let users;

users = JSON.parse(window.localStorage.getItem('users'));

if(!users) {
  users = new Array(5).fill('').map( _ => faker.helpers.userCard());
  window.localStorage.setItem('users', JSON.stringify(users));
}



module.exports = {
  users
};



// const detailMap = users.reduce((acc, user)=> {
//   acc[user] = new Array(1 + faker.random.number(2)).fill('-').map( _ => faker.helpers.userCard());
//   return acc;
// }, {});