function sendFriendRequest(socket) {
    const afUser = document.querySelectorAll('.afUser')
    const sendFr = document.querySelectorAll('.sfRequestBtn')
    

    sendFr.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            requestSending(socket, afUser[index].innerText)
            
        }) 
    });

}

function requestSending(socket, user) {
    socket.emit('sendFR', user)
    
}


export { sendFriendRequest }