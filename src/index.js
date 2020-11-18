const { users } = require('./data');
const render = require('./render');


const userList = document.querySelector('#user-list');

let curr = window.location.hash.slice(1)*1;

const _render = ()=> {
  render({ users, curr, userList });
}
_render();

window.addEventListener('hashchange', ()=> {
  let bit = 1;
  return function () {
    if(bit === 1) {
      bit = 0;
      console.log(bit);
    } else {
      curr = window.location.hash.slice(1)*1;
      _render();
      bit = 1;
      console.log(bit);
    }
  }
})