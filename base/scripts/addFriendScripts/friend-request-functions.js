function acceptUserFr(socket) {
    const accept = document.querySelectorAll('.accept')
    const fr = document.querySelectorAll('.fRequest')
    const users = document.querySelectorAll('.fUser h5')
    const fRequests = document.getElementById('friendRequests')

    accept.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // todo
            socket.emit('frAccepted', (users[i].innerText))
            fRequests.removeChild(fr[i])
        })
    });
}

function declineUserFr(socket) {
    const fr = document.querySelectorAll('.fRequest')
    const decline = document.querySelectorAll('.decline')
    const users = document.querySelectorAll('.fUser h5')
    const fRequests = document.getElementById('friendRequests')

    decline.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // todo
            socket.emit('frDeclined', (users[i].innerText))
            fRequests.removeChild(fr[i])
        })
    });
}


export { acceptUserFr, declineUserFr }