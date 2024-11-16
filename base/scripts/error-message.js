export function sendErrorMessage(data, socket) {
    const loginError = document.getElementById('login-error')
    const user = document.getElementById('user')

    if (data) {
        loginError.style.display = 'block'
        user.classList.add('inputError')
        socket.disconnect()

    } else {
        loginError.style.display = 'none'
    }
}