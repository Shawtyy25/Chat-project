import { senderSide, receiverSide } from "../functions/add-users-to-private.js"

function sendToUser(socket) {
    document.addEventListener('usersAdded', () => {

        const users = document.getElementById('users')
        const own = document.querySelector('.own')
        const send = document.getElementById('send-msg')
        const prvtUser = document.getElementById('prvtUser')
        let receiver

        users.addEventListener('click', (event) => {
            if (event.target.matches('p')) {
                const { id, innerText } = event.target                
                if (!id) {
                    if (receiver === innerText) {
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
    prvtUser.innerText = ''
    prvtUser.innerText = `[To: ${child}]`
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

