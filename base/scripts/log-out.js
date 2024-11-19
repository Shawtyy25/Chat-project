import { loggedOutUserOutput } from "../functions/logged-out-user.js"

function userLogOut(socket) {
    const logout = document.getElementById('logout')

    logout.addEventListener('click', (e) => {
        e.preventDefault()

        logoutEmit(socket)
    })
}

function logoutEmit(socket) {
    const own = document.querySelector('.own')

    if (own.id) {
        socket.emit('logout', {user: own.innerText}) // küld egy csomagot a szervernek benne a kijelentkezett felhasználóval (amit az OWN elem miatt könnyedén lehet vizsgálni)

        window.location.reload() //ujratolti az oldalt és lecsatlakoztatja a socket.io-ról a kijelentkezett klienst
    
        socket.disconnect()
    }
    
}

function userDelete(socket) {
    socket.on('user-left', (lgUser) => { // a többi kliens felé intézett parancs
        loggedOutUserOutput(lgUser.user) // ha kell a kiírás

        const users = document.getElementById('users')

        Array.from(users.children).forEach(user => {
           if (user.innerText == lgUser.user) { // vizsgálja hogy melyik mező a kijelentkezett felhasználó, és kitörli azt.
                users.removeChild(user) 
           }
        });

        friendRequestDelete(lgUser)
    })
}


function friendRequestDelete(socket) {
    const fr = document.querySelectorAll('.fRequest')
    const friendRequests = document.getElementById('friendRequests')
    const users = document.querySelectorAll('.fRequest h5') 

    users.forEach((user, i) => {
        console.log(user.innerText);
        console.log(socket.user);
        if (user.innerText === socket.user) {
            console.log('Teszt');
            friendRequests.removeChild(fr[i])
        }
    });
    console.log(`Éppen függő barátkérelmek eltávolítva ${socket.user} távozása miatt!`);
}

export function runLogOut(socket) {
    userLogOut(socket)
    userDelete(socket)

}
