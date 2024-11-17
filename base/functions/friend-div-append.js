export function friend(username) {
    const friends = document.getElementById('friends')
    const friend = document.createElement('div')
    const username = document.createElement('p')
    const remove = document.createElement('i')

    friend.classList.add('friend')

    remove.classList.add('fa-solid')
    remove.classList.add('fa-user-minus')
    remove.classList.add('remove-friend')
    
    friend.appendChild(username)
    friend.appendChild(remove)

    friends.appendChild(friend)
}