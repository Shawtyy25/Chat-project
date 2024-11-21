export function addFriendsDiv() {
    const afBtn = document.getElementById('addFriendsBtn')
    const friends = document.getElementById('friends')
    const addFriends = document.getElementById('addFriends')

    afBtn.addEventListener('click', () => {
        addFriends.classList.remove('hidden')
        addFriends.classList.add('active-fx')


        friends.classList.remove('active-fx')
        friends.classList.add('hidden')
    })
}