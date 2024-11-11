import { addUsers, addOwnUser } from "../functions/add-users.js"

export function getValue(socket) {
    const users = document.getElementById('users')
    
    socket.on('userJoined', (profiles) => {
        

        const loginError = document.getElementById('login-error')
        if (profiles.ifExist) {
            loginError.style.display = 'block'
        } else {
            for (let data of profiles.users) {
                if (data.id === profiles.ownSocket) {
                    console.log(data.user);
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


