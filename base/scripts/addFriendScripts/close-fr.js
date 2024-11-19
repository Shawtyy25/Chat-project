export function closeFriendRequests() {
    const frDiv = document.getElementById('friendRequestDiv')
    const friendsDiv = document.getElementById('friends')
    const closeFr = document.querySelector('.close-fr')

    closeFr.addEventListener('click', () => {
        frDiv.classList.remove('active-fx')
        frDiv.classList.add('hidden')

        friendsDiv.classList.remove('hidden')
        friendsDiv.classList.add('active-fx')
    })

}