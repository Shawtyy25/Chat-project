export function sendErrorMessage(data, socket) {
    const loginError = document.getElementById('login-error')

    if (data) {
        loginError.style.display = 'block'
        socket.disconnect()

    } else {
        loginError.style.display = 'none'
    }
}