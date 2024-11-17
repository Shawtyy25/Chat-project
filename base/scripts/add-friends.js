export function addFriends(socket) {
    const afInput = document.getElementById('addFriendsInput')
    const sfBtn = document.getElementById('sfRequest')

    sfBtn.addEventListener('click', (e) => {
        e.preventDefault()

        console.log('teszt for append');
    })
}