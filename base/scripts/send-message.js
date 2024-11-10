
function start(socket) {
    const send = document.getElementById('send-msg')

    send.addEventListener('click', (e) => {
        e.preventDefault()
        
        messageEmit(socket) // Elküldi az üzenetet gombnyomásra
    })
}

function messageEmit(socket) {
    const chatbox = document.getElementById('chatbox')
    const own = document.getElementById('own')

    if (chatbox.value) {
        socket.emit('message', { text: chatbox.value, user: own.innerText})
        chatbox.value = ''
    }
}

function getResponse(socket) {
    socket.on('message', (data) => {
        const chat = document.getElementById('chat')
        const text = document.createElement('p')

        text.innerText = `${data.user}: ${data.text}`

        chat.appendChild(text)
        window.scrollTo(0, document.body.scrollHeight)
    })
}



function sendMessage(socket) {
    
    start(socket)
    getResponse(socket)
}

export { sendMessage }
