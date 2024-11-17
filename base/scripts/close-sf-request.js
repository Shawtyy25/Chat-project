export function closeSfRequest() {
    const closeSf = document.querySelector('.close-sf')
    const afBtn = document.getElementById('addFriendsBtn')
    const friends = document.getElementById('friends')
    const addFriends = document.getElementById('addFriends')
    const sfBtn = document.getElementById('sfRequest')

    closeSf.addEventListener('click', () => {
        afBtn.classList.add('active-fx')
        afBtn.classList.remove('hidden')

        friends.classList.add('active-fx')
        friends.classList.remove('hidden')

        addFriends.classList.add('hidden')
        addFriends.classList.remove('active-fx')

        sfBtn.classList.add('hidden')
        sfBtn.classList.remove('active-fx')
    })
}