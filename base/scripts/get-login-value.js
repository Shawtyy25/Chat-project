import { addUsers, addOwnUser } from "../functions/add-users.js"

export function getValue(socket) {
    const users = document.getElementById('users')
    const loginError = document.getElementById('login-error')
    
    socket.on('userJoined', (profiles) => {
        
        if (!profiles.ifExist) {
            for (let data of profiles.users) {
                if (data.id === profiles.ownSocket) {
                    addOwnUser(profiles, data)

                }
            }
            const own = document.querySelector('.own')

            for (let data of profiles.users) {
                if (data.user !== own.innerText) {
                    addUsers(data)
                }
            }
        }
        
    })
    
    socket.on('userJoinedToAll', (profiles) => {
        try{
            const own = document.querySelector('.own')
            Array.from(users.children).forEach(child => {
                if (child !== own) {
                    users.removeChild(child)
                }

            });

    
            for (let data of profiles.users) {
                if (data.user !== own.innerText.trim()) {
                    console.log(data);
                    addUsers(data)
                }
            }
            
        } catch {
            console.error('error');
            
        }
          
        
    })
}


