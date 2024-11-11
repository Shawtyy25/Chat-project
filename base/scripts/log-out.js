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
    socket.emit('logout', {user: own.innerText})

    window.location.reload()
    socket.disconnect()
}

function userDelete(socket) {
    socket.on('user-left', (lgUser) => {
        /* loggedOutUserOutput(lgUser.user) */ // ha kell a kiírás

        const users = document.getElementById('users')
        
        Array.from(users.children).forEach(user => {
           if (user.innerText === lgUser.user) {
                users.removeChild(user)
           }
        });

    })
}

export function runLogOut(socket) {
    userLogOut(socket)
    userDelete(socket)

}
