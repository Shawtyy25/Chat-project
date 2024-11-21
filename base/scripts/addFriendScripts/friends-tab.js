export function friendsTab() {
    const friends = document.getElementById('friends')
    const friendsTab = document.getElementById('friendsTab')
    const addFriends = document.getElementById('addFriends')
    const friendRequestDiv = document.getElementById('friendRequestDiv')

    friendsTab.addEventListener('click', () => {
        friends.classList.add('active-fx')
        friends.classList.remove('hidden')

        addFriends.classList.add('hidden')
        addFriends.classList.remove('active-fx')
        
        friendRequestDiv.classList.add('hidden')
        friendRequestDiv.classList.remove('active-fx')  
    })
}