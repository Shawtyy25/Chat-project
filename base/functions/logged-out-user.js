export function loggedOutUserOutput(data) {
    const chat = document.getElementById('chat')
    const user = document.createElement('h5')

    user.classList.add('loggedOutUser')
    user.innerText = `${data} has left the chat!`

    chat.appendChild(user)
}