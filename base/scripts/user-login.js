export function sendValue(socket, userValue) {
    socket.emit('newUserConnected', userValue)

}


