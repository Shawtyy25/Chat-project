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
        /* if (profile === false ) {
            // ha a profil regisztrált már
            loginError.style.display = 'block'
        } else {
            
            socket.emit('newuser', profile[1]['name'])
            console.log(profile[1]['socketID']);
            main(profile);
        }
         */
    }); // sajat kiiratas ---------------->

    response(socket);
}

export { appendUserToDiv }