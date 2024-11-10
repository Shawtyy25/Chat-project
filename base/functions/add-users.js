export function addUsers(users) {
    const usersDiv = document.getElementById('users')
    usersDiv.innerHTML = ''
    const own = document.createElement('p')
    own.id = 'own'
    own.innerText = users.at(-1)['name']
    usersDiv.appendChild(own)

    for (let i = 0; i < users.length-1; i++) {
        const username = document.createElement('p')
        username.innerText = users[i]['name']
        username.id = users[i]['name']
        usersDiv.appendChild(username)
    }
}