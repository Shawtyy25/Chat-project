export function friendsTab() {
    const friends = document.getElementById('friends')
    const friendsTab = document.getElementById('friendsTab')
    const addFriends = document.getElementById('addFriends')

    friendsTab.addEventListener('click', () => {
        friends.classList.add('active-fx')
        friends.classList.remove('hidden')

        addFriends.classList.add('hidden')
        friends.classList.remove('active-fx')
    })
}