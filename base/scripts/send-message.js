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

    if (chatbox.value) {
        socket.emit('send-message', { sender: own.innerText, msg: chatbox.value })
        chatbox.value = ''
    }
}

function getMessage(socket) {
    socket.on('get-message', (data) => {
        const chat = document.getElementById('chat')
        const message = document.createElement('p')

        message.innerText = `${data.sender}: ${data.msg}`

        chat.appendChild(message)
        window.scrollTo(0, document.body.scrollHeight)
    })
}


export function messageReceiver(socket) {
    sendMessage(socket)
    getMessage(socket)
}
