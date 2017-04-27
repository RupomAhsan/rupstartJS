import {getUsers,deleteUser} from './api/userApi';

//Populate the table of users using user API
let usersContent = '';
  getUsers().then((users) => {
    users.forEach((user) => {
      usersContent += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}
      </tr>`;
    });
    global.document.getElementById('users').innerHTML = usersContent;
     const deleteLinks = global.document.getElementsByClassName('deleteUser');
    Array.from(deleteLinks, (link) => {
      link.onclick = function(event) {
        const element = event.target;
        event.preventDefault();
        deleteUser(element.attributes['data-id'].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }
    });
});
