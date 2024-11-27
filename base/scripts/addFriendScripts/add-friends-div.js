export function addFriendsDiv() {
    const afBtn = document.getElementById('addFriendsBtn')
    const friends = document.getElementById('friends')
    const addFriends = document.getElementById('addFriends')
    const frDiv = document.getElementById('friendRequestDiv')

    afBtn.addEventListener('click', () => {
        addFriends.classList.remove('hidden')
        addFriends.classList.add('active-fx')


        friends.classList.remove('active-fx')
        friends.classList.add('hidden')

        frDiv.classList.remove('active-fx')
        frDiv.classList.add('hidden')
    })
}