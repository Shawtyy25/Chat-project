export function sendErrorMessage(data) {
    const loginError = document.getElementById('login-error')

    if (data) {
        loginError.style.display = 'block'
    } else {
        loginError.style.display = 'none'
    }
}