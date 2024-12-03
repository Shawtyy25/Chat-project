function senderSide(data) {
    const chat = document.getElementById('chat')
    const message = document.createElement('p')
    const prvtUser = document.getElementById('prvtUser')
    const chatbox  = document.getElementById('chatbox')
    const prvtUserDiv = document.querySelector('.prvtUserDiv')
    const middle = document.querySelector('.middle-text')

    message.innerHTML = `${data.sender} [To: ${data.receiver}]: <br> ${data.msg}`

    chat.append(message)
    prvtUserDiv.classList.add('hidden')
    prvtUserDiv.classList.remove('active-fx')
    prvtUser.innerText = ''
    chatbox.value = ''
    middle.scrollTo(0, middle.scrollHeight)
}

function receiverSide(data) {
    const chat = document.getElementById('chat')
    const message = document.createElement('p')
    const prvtUser = document.getElementById('prvtUser')
    const chatbox  = document.getElementById('chatbox')
    const prvtUserDiv = document.querySelector('.prvtUserDiv')
    const middle = document.querySelector('.middle-text')

    message.innerText = `[From: ${data.sender}]: ${data.msg}`

    chat.append(message)
    prvtUserDiv.classList.remove('active-fx')
    prvtUser.innerText = ''
    prvtUser.innerText = ''
    chatbox.value = ''
    middle.scrollTo(0, middle.scrollHeight)
}


export { senderSide, receiverSide }