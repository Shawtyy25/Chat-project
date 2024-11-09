import { user } from "./users-join.js";

function main(user) {
    addUsers(user[0])
}

function response(socket) {
    const usersDiv = document.getElementById('users')
    usersDiv.innerHTML = ''

    socket.on('appenduser', (profile) => {
        const username = document.createElement('p')
        username.innerText = profile 

        usersDiv.appendChild(username)
    })
}


function addUsers(users) {
    const usersDiv = document.getElementById('users')
    usersDiv.innerHTML = ''
    const own = document.createElement('p')
    own.id = 'own'
    own.innerText = users.at(-1)['name']
    usersDiv.appendChild(own)

    for (let i = 0; i < users.length-1; i++) {
        const username = document.createElement('p')
        username.innerText = users[i]['name']
        usersDiv.appendChild(username)
    }
}

function appendUserToDiv(socket) {
    const users = user()
    users.then(profile => {
        socket.emit('newuser', profile[1]['name'])
        main(profile);
    });

    response(socket);
}

export { appendUserToDiv }