export function addFriendsDiv() {
    const afBtn = document.getElementById('addFriendsBtn')
    const friends = document.getElementById('friends')
    const addFriends = document.getElementById('addFriends')
    const sfBtn = document.getElementById('sfRequest')

    afBtn.addEventListener('click', () => {
        if (afBtn.innerText = 'Add Friends') {

            addFriends.classList.add('active-fx')
            addFriends.classList.remove('hidden')

            friends.classList.remove('active-fx')
            friends.classList.add('hidden')

            afBtn.classList.add('hidden')
            afBtn.classList.remove('active-fx')

            sfBtn.classList.add('active')
            sfBtn.classList.remove('hidden')
        }
    }) 
}