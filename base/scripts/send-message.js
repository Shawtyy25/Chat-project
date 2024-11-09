

function start(socket) {
    const send = document.getElementById('send-msg')

    send.addEventListener('click', (e) => {
        e.preventDefault()
        
        messageEmit(socket) // Elküldi az üzenetet gombnyomásra
    })
}

function messageEmit(socket) {
    const chatbox = document.getElementById('chatbox')

    if (chatbox.value) {
        socket.emit('message', chatbox.value)
        chatbox.value = ''
    }
}

function getResponse(socket) {
    socket.on('message', (msg) => {
        const chat = document.getElementById('chat')
        const text = document.createElement('p')
        text.innerText += msg
        chat.appendChild(text)
        window.scrollTo(0, document.body.scrollHeight)
    })
}



function sendMessage(socket) {
    
    start(socket)
    getResponse(socket)
}

export { sendMessage }
