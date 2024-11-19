function friendsDivAppend(socket) {
    /* 
    <div class="friend">
        <p>FRIEND EXAMPLE</p>
        <i class="fa-solid fa-user-slash remove-friend"></i>
    </div>
     */

    socket.on('friendAddedReq', (user) => {
        console.log(`Sikeresen összebarátkoztál ${user.user} felhasználóval!`);
        appender(user)
    })

    socket.on('friendAddedRes', (user) => {
        console.log(`Sikeresen összebarátkoztál ${user.user} felhasználóval!`);
        appender(user)
    })
}

function appender(user) {
    const friends = document.getElementById('friends')
    const friendDiv = document.createElement('div')
    const username = document.createElement('p')
    const icon = document.createElement('i')

    username.innerText = user.user

    icon.classList.add('fa-solid')
    icon.classList.add('fa-user-slash')
    icon.classList.add('remove-friend')

    friendDiv.classList.add('friend')

    friendDiv.appendChild(username)
    friendDiv.appendChild(icon)
    friends.appendChild(friendDiv)
}


export { friendsDivAppend }