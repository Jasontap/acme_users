
const render = ({users, curr, userList})=> {
  const html = `
  ${ users.map( (user, idx) => `
  <li>
    <a href='#${ idx }'>${ user.name }</a>
    ${
      curr === idx ? `
      <ul>
        <li>${ user.username }</li>
        <li>${ user.email }</li>
        <li>${ user.phone }</li>
      </ul>
    ` : ''
    }
  </li>
  `).join('') }
  `;
  userList.innerHTML = html;
}

module.exports = render;