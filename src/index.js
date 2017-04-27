import {getUsers} from './api/userApi';

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
});
