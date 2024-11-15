export function loggedInUserOutput(data) {
    const user = document.createElement('h5')
    const chat = document.getElementById('chat')

    user.classList.add('loggedInUser')
    user.innerText = `${data} has joined the chat!`

    chat.appendChild(user)
}