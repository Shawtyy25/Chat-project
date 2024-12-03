export function switchSettingsTab(socket) {
    const settingsContent = document.querySelector('.settings-content')
    const options = document.querySelectorAll('section')
    const settingsHeader = document.querySelector('.settings-header h1')
    const themeDiv = document.querySelector('.theme-options-div')
    // const startDiv = document.querySelector('.start-options-div')

    options.forEach(option => {
        option.addEventListener('click', () => {
            switch (true) {
                case option.classList.contains('themes-section'):
                    themeDiv.classList.add('active')
                    themeDiv.classList.remove('hidden')
    
                  
                
                case option.classList.contains('profile-section'):
                    socket.emit('profile-data-req')     
                    /* profileSettings(socket)   */          
            }
        })
        
    });
}


function profileSettings(socket) {
    socket.on('profile-data-res', (data) => {
        
    })
}