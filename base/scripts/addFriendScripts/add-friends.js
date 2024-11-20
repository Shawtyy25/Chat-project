import { sendFriendRequest } from "./send-friend-request.js"
import { receiveFriendRequest } from "./receive-friend-request.js"


export function checkFriendRequest(socket) {
    // input mezo vizsgálata
    const afInput = document.getElementById('addFriendsInput')
    const afUsers = document.getElementById('afUsers')

    afInput.addEventListener('input', () => {
        socket.emit('requestForFriends', (afInput.value))  
    })

    socket.on('usersIn', (users) => {
        afUsers.innerHTML = ''
        if (users.length) {
            users.forEach(user => {
                appendUser(user)
            });
            
            sendFriendRequest(socket)
        }        
    })

    receiveFriendRequest(socket)
}

function appendUser(userData) {
    const afUsers = document.getElementById('afUsers')
    const afUser = document.createElement('div')
    const user = document.createElement('p')
    const icon = document.createElement('i')

    afUser.classList.add('afUser')

    user.innerText = userData.user

    icon.classList.add('fa-solid')
    icon.classList.add('sfRequestBtn')
    icon.classList.add('fa-user-plus')

    afUser.appendChild(user)
    afUser.appendChild(icon)
    afUsers.appendChild(afUser)
}
