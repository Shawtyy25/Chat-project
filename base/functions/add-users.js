function addOwnUser(profiles, data) {
    const users = document.getElementById('users')
    /* const user = document.createElement('div') */
    const ownUser = document.createElement('p')
    /* const userIcon = document.createElement('i') */

    ownUser.id = profiles.ownSocket
    ownUser.classList.add('own')
    ownUser.classList.add("users")
    ownUser.innerText = data.user
    /* userIcon.classList.add('fa-regular')
    userIcon.classList.add('fa-circle-user') */

   /*  user.appendChild(userIcon)
    user.appendChild(ownUser) */
    users.appendChild(ownUser)  
}


function addUsers(data) {
    const users = document.getElementById('users')
   /*  const userDiv = document.createElement('div') */
    const user = document.createElement('p')
    /* const userIcon = document.createElement('i')
 */ 
    user.classList.add("users")
    user.innerText = data.user
    /* userIcon.classList.add('fa-regular')
    userIcon.classList.add('fa-circle-user') */

    /* userDiv.appendChild(userIcon)
    userDiv.appendChild(user) */
    users.appendChild(user)
   
}


export { addOwnUser, addUsers }