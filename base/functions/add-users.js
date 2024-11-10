export function addUsers(users, socket) {
    const usersDiv = document.getElementById('users')
    usersDiv.innerHTML = ''
    const own = document.createElement('p')
    own.id = 'own'
    users.forEach(user => {
        if (user['socketID'] === socket.id) {
            own.innerText = user['name']
            usersDiv.appendChild(own)
        }
    })

    users.forEach(user => {
        if (user['socketID'] !== socket.id) {
            const username = document.createElement('p')
            username.innerText = user['name']
            usersDiv.appendChild(username)
        }
    });

}