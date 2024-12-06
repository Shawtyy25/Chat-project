export function switchSettingsTab(socket) {
    const options = document.querySelectorAll('section')
    const themeDiv = document.querySelector('.theme-options-div')
    const startDiv = document.querySelector('.start-options-div')
    

    options.forEach(option => {
        option.addEventListener('click', () => {
            const profileOptions = document.querySelector('.profile-options-div')   
            switch (true) {
                case option.classList.contains('themes-section'):
                    
                    if (profileOptions) {
                        profileOptions.classList.add('hidden')
                        profileOptions.classList.remove('active')
                    }
                    
                    themeDiv.classList.add('active')
                    themeDiv.classList.remove('hidden')
    
                    startDiv.classList.add('hidden')
                    startDiv.classList.remove('active')

                    break 


                case option.classList.contains('profile-section'):

                    themeDiv.classList.add('hidden')
                    themeDiv.classList.remove('active')
    
                    startDiv.classList.add('hidden')
                    startDiv.classList.remove('active')
                    if (!profileOptions) {
                        socket.emit('profile-data-req')     

                        profileSettings(socket)
                    } else {
                        profileOptions.classList.add('active')
                        profileOptions.classList.remove('hidden')

                        
                    }
                    
                    break
            }
        })
        
    });
}


function profileSettings(socket) {
    socket.on('profile-data-res', (data) => {
        const settingsContent = document.querySelector('.settings-content')
        const profileDiv = document.createElement('div')
        profileDiv.classList.add('profile-options-div', 'active')
        profileDiv.innerHTML = `<div class="settings-header">
                                        <h1>Profile</h1>
                                    </div>
                                    <div class="profile-options">
                                        <div class="pfp">
                                            <img src="./hide-facebook-profile-picture-notification.jpg" alt="pfp" title="pfp">
                                        </div>
                                        <div class="profile-data">
                                            <div class="username">
                                                <h3>${data.username}</h3>
                                            </div>
                                            <div class="friendID">
                                                <p>${data.id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> `

        
        settingsContent.appendChild(profileDiv)
    })  
}