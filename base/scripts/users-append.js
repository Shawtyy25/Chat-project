import { addUsers } from "../functions/add-users.js";
import { user } from "./users-join.js";

function main(user, socket) {
    addUsers()
}

function response(socket) {
    socket.on('appenduser', (data) => {
        if (!data.data) {
            addUsers(data.users, socket)
        }
       
    })
}




function appendUserToDiv(socket) {
    const loginError = document.getElementById('login-error')
    const valueFind = user()

    valueFind.then(value => {
        if (value.type) {
            socket.emit('newuser', value.data)
        }
    }); // sajat kiiratas ---------------->

    response(socket);
}

export { appendUserToDiv }