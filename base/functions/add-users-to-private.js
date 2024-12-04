function senderSide(data) {
    const chat = document.getElementById('chat')
    const message = document.createElement('p')
    const prvtUser = document.getElementById('prvtUser')
    const chatbox  = document.getElementById('chatbox')
    const prvtUserDiv = document.querySelector('.prvtUserDiv')
    const middle = document.querySelector('.middle-text')
    const receiver = document.createElement('div')
    const prvtMsg = document.createElement('div')

    receiver.innerText = `To: ${data.receiver}`

    message.innerText = `${data.msg}`

    prvtMsg.appendChild(receiver)
    prvtMsg.appendChild(message)

    prvtMsg.classList.add('prv-msg-div')

    chat.append(prvtMsg)
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
    const sender = document.createElement('div')
    const prvtMsg = document.createElement('div')

    sender.innerText = `From: ${data.sender}`
    message.innerText = `${data.msg}`

    
    prvtMsg.appendChild(sender)
    prvtMsg.appendChild(message)
    
    prvtMsg.classList.add('prv-msg-div')

    chat.append(prvtMsg)
    prvtUserDiv.classList.remove('active-fx')
    prvtUser.innerText = ''
    prvtUser.innerText = ''
    chatbox.value = ''
    middle.scrollTo(0, middle.scrollHeight)
}


export { senderSide, receiverSide }