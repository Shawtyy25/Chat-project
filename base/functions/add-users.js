function addOwnUser(profiles, data) {
    const users = document.getElementById('users')
    const ownUser = document.createElement('p')
    ownUser.id = profiles.ownSocket
    ownUser.classList.add('own')
    ownUser.innerText = data.user

    users.appendChild(ownUser)

}


function addUsers(data) {
    const users = document.getElementById('users')
    const user = document.createElement('p')
    user.innerText = data.user
    users.appendChild(user)
}


export { addOwnUser, addUsers }