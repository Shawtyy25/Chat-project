export function friendAlerts() {
    const sfAlert = document.querySelector('.sfAlert')
    const frDiv = document.getElementById('friendRequestDiv')
    const friendsDiv = document.getElementById('friends')

    sfAlert.addEventListener('click', () => {
        frDiv.classList.remove('hidden')
        frDiv.classList.add('active-fx')

        friendsDiv.classList.remove('active-fx')
        friendsDiv.classList.add('hidden')

    })

    
}