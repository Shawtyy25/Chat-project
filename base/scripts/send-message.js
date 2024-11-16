
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
        const message = document.createElement('p')
        const middle = document.querySelector('.middle-text')

        message.innerText = `${data.sender}: ${data.msg}` 

        chat.appendChild(message) // kliens oldalon megjelenik az üzenet
        middle.scrollTo(0, middle.scrollHeight)
    })
}


export function messageReceiver(socket) {
    sendMessage(socket)
    getMessage(socket)
}
