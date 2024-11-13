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
           if (user.innerText === lgUser.user) { // vizsgálja hogy melyik mező a kijelentkezett felhasználó, és kitörli azt.
                users.removeChild(user) 
           }
        });

    })
}

export function runLogOut(socket) {
    userLogOut(socket)
    userDelete(socket)

}
