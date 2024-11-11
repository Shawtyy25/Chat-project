export function loggedOutUserOutput(data) {
    const user = document.createElement('h5')
    const chat = document.getElementById('chat')

    user.classList.add('loggedOutUser')
    user.innerText = `Kijelentkezett ${data} felhasználó!`

    chat.appendChild(user)
}