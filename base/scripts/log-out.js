import { addUsers } from "../functions/add-users.js";

function teszt(socket) {
    const own = document.getElementById('own')
    if (own.innerText) {
        
        socket.emit('logout', own.innerText);
        
        socket.disconnect();

        socket = null;

        window.location.reload()
    }
}

function usersResponse(socket) {
    if (socket && socket.connected) {
        
        socket.on('b-message', (data) => {
            addUsers(data)
        });
    } else {
        
        socket.once('connect', () => {
            socket.on('b-message', (data) => {
                addUsers(data)
            });
        });
    }
}



export { teszt, usersResponse }
