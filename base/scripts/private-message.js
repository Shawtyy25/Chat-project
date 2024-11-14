import { senderSide, receiverSide } from "../functions/add-users-to-private.js"



function sendToUser(socket) {
    document.addEventListener('usersAdded', () => {

        const users = document.getElementById('users')
        const own = document.querySelector('.own')
        const send = document.getElementById('send-msg')
        console.log(users);
        console.log(own);
        let receiver

        users.addEventListener('click', (event) => {
            if (event.target.matches('p')) {
                const { id, innerText } = event.target                
                if (!id) {
                    chatboxLog(innerText)
                    receiver = innerText
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

function receivePrivateMessage(socket) {
    socket.on('prvtMsgReceiver', (data) => {
        console.log(data.sender, data.msg);
    }) 
}

function privateMessageSender(socket) {
    socket.on('prvtMsgSender', (data) => {
        console.log(data.receiver, data.msg);
    })
}

export { sendToUser }

