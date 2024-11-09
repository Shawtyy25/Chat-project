
const socket = io()

function start() {
    const send = document.getElementById('send-msg')

    send.addEventListener('click', (e) => {
        e.preventDefault()
        
        messageEmit() // Elküldi az üzenetet gombnyomásra
    })
}

function messageEmit() {
    const chatbox = document.getElementById('chatbox')

    if (chatbox.value) {
        socket.emit('message', chatbox.value)
        chatbox.value = ''
    }
}

function getResponse() {
    socket.on('message', (msg) => {
        const chat = document.getElementById('chat')
        const text = document.createElement('p')
        text.innerText += msg
        chat.appendChild(text)
        window.scrollTo(0, document.body.scrollHeight)
    })
}



function sendMessage() {
    start()
    getResponse()
}

export { sendMessage }
