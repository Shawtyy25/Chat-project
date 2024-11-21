export function addFriendsDiv() {
    const afBtn = document.getElementById('addFriendsBtn')
    const friends = document.getElementById('friends')
    const addFriends = document.getElementById('addFriends')

    afBtn.addEventListener('click', () => {
            addFriends.classList.add('active-fx')
            addFriends.classList.remove('hidden')

            friends.classList.remove('active-fx')
            friends.classList.add('hidden')
        })
}