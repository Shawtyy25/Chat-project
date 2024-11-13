/* function sendToUser(socket) {
    const users = document.querySelectorAll('#users p')
    const own = document.querySelector('.own')
    const send = document.getElementById('send-msg')
    console.log(users);
    console.log(own);
    let receiver

    users.forEach(user => {

        user.addEventListener('click', () => {
            if (user.innerText !== own.innerText) {
                chatboxLog(user)
                receiver = user.innerText
            }

        })

    });

    send.addEventListener('click', () => {
        if (receiver) {
            privateMessage(socket, receiver)

        }

    })


}

function chatboxLog(child) {
    const prvtUser = document.getElementById('prvtUser')
    prvtUser.innerText = ''
    prvtUser.innerText = `[To: ${child.innerText}]`
}

function privateMessage(socket, receiver) {
    const chatbox = document.getElementById('chatbox')
    const own = document.querySelector('.own')
    socket.emit('privateMessage', { sender: own.innerText, receiver: receiver, msg: chatbox.value })
}

export { sendToUser }
 */
