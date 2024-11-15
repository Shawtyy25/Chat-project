function senderSide(data) {
    const chat = document.getElementById('chat')
    const message = document.createElement('p')
    const prvtUser = document.getElementById('prvtUser')
    const chatbox  = document.getElementById('chatbox')

    message.innerText = `${data.sender}[To: ${data.receiver}]: ${data.msg}`

    chat.append(message)
    prvtUser.innerText = ''
    chatbox.value = ''
    window.scrollTo(0, document.body.scrollHeight)
}

function receiverSide(data) {
    const chat = document.getElementById('chat')
    const message = document.createElement('p')
    const prvtUser = document.getElementById('prvtUser')
    const chatbox  = document.getElementById('chatbox')

    message.innerText = `[From: ${data.sender}]: ${data.msg}`

    chat.append(message)
    prvtUser.innerText = ''
    chatbox.value = ''
    window.scrollTo(0, document.body.scrollHeight)
}


export { senderSide, receiverSide }