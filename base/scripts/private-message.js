import { senderSide, receiverSide } from "../functions/add-users-to-private.js"

function sendToUser(socket) {
    document.addEventListener('usersAdded', () => {

        const users = document.getElementById('users')
        const own = document.querySelector('.own')
        const send = document.getElementById('send-msg')
        const prvtUser = document.getElementById('prvtUser')
        const prvtUserDiv = document.querySelector('.prvtUserDiv')
        let receiver

        users.addEventListener('click', (event) => {
            if (event.target.matches('p')) {
                const { id, innerText } = event.target                
                if (!id) {
                    if (receiver === innerText) {
                        prvtUserDiv.classList.add('hidden')
                        prvtUserDiv.classList.remove('active-fx')
                        
                        prvtUser.innerText = ''
                        receiver = ''

                    } else {
                        chatboxLog(innerText)
                        receiver = innerText
                    }
                    
                }
            }

        })

        send.addEventListener('click', () => {
            const chatbox = document.getElementById('chatbox')
            if (receiver && chatbox.value) {
                privateMessage(socket, receiver)

            }

        })

        receivePrivateMessage(socket)
        privateMessageSender(socket)
    })
}

function chatboxLog(child) {
    const prvtUser = document.getElementById('prvtUser')
    const prvtUserDiv = document.querySelector('.prvtUserDiv')
    prvtUserDiv.classList.add('active-fx')
    prvtUserDiv.classList.remove('hidden')
    prvtUser.innerText = ''
    prvtUser.innerText = `${child}`
}

function privateMessage(socket, receiver) {
    const own = document.querySelector('.own')
    socket.emit('privateMessage', { sender: own.innerText, receiver: receiver, msg: chatbox.value })
}


// receive
function receivePrivateMessage(socket) {
    socket.on('prvtMsgReceiver', (data) => {
        receiverSide(data)
    }) 
}

function privateMessageSender(socket) {
    socket.on('prvtMsgSender', (data) => {
        senderSide(data)
    })
}

export { sendToUser }

