
function sendMessage(socket) {
    const send = document.getElementById('send-msg')

    send.addEventListener('click', (e) => {
        e.preventDefault()

        messageEmit(socket)
    })

    

}

function messageEmit(socket) {
    const chatbox = document.getElementById('chatbox')
    const own = document.querySelector('.own')
    const prvtUser = document.getElementById('prvtUser')

    if (chatbox.value && !prvtUser.innerText) {
        socket.emit('send-message', { sender: own.innerText, msg: chatbox.value }) // küdljük a szervernek az üzenetet, az üzentettel és a hozzá tartozó felhasználóval
        chatbox.value = ''
    }
}

function getMessage(socket) {
    socket.on('get-message', (data) => {
        const chat = document.getElementById('chat')
        const messageDiv = document.createElement('div')
        const user = document.createElement('h4')
        const message = document.createElement('p')
        const middle = document.querySelector('.middle-text')

        messageDiv.classList.add('message-div')
        user.innerText = data.sender
        message.innerText = data.msg

        messageDiv.appendChild(user)
        messageDiv.appendChild(message)
        chat.appendChild(messageDiv) // kliens oldalon megjelenik az üzenet
        middle.scrollTo(0, middle.scrollHeight)
    })
}


export function messageReceiver(socket) {
    sendMessage(socket)
    getMessage(socket)
}
