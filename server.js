const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const bodyParser = require('body-parser')

app.use(express.static('base'))
app.use(bodyParser.json())
const users = []




io.on('connection', (socket) => {
    let userExists = false

    socket.on('newUserConnected', (loginUser) => { // a socket vizsgálja a bejelentezéseket
        const user = {}
        socket.user = loginUser
        user.user = loginUser
        user.id = socket.id
        

        if (users.length === 0) { 
            // ha a users object hossza 0 akkor csak siman hozzaadja az uj felhasznalot,
            // és a kliens oldalra visszakuld ket emitet, az elsot kifejezetten a bejelentkezett felhasználónak
            // a második pedig kiküldi az összes kliensnek az új adatokat, viszont az új klienset kihagyja
            users.push(user)
            console.log(`Új felhasználó csatlakozott: ${socket.user} (id: ${socket.id})`);
            userExists = false

            io.to(socket.id).emit('userJoined', {ifExist: userExists, ownSocket: socket.id, users: users})
            socket.broadcast.emit('userJoinedToAll', {users: users})

        } else { // azonban ha van már benne elem, vizsálni kell hogy nem e ismétlődik.
            for (let data of users) {
                if (data.user === user.user) {
                    userExists = true // ha ismétlődik akkor kap egy true értéket, amit kliens oldalon vizsgálok is
                    
                    io.emit('userJoined', {ifExist: userExists})
                    break
                    
                }
            }
            if (!userExists) { // itt pedig ha még nem szerepel akkor elküldi a két emitet
                users.push(user)
                userExists = false
                console.log(`Új felhasználó csatlakozott: ${socket.user} (id: ${socket.id})`);

                io.to(socket.id).emit('userJoined', {ifExist: userExists, ownSocket: socket.id, users: users})
                socket.broadcast.emit('userJoinedToAll', {users: users, userID: socket.id})
            }
        }

        io.to(socket.id).emit('joinedUserMessageError', {exist: userExists})

    })


    // user message sending
    socket.on('send-message', (msgData) => { // kiosztja a klienseknek a felhasználót és az üzenetet amit az adott felhasználó küldött
        io.emit('get-message', { sender: msgData.sender, msg: msgData.msg })
    })


    // Private message 
    socket.on('privateMessage', (data) => {
        for (let user of users) {
            if (user.user === data.receiver) {
                console.log(user.id, socket.id);
                socket.to(user.id).emit('prvtMsgReceiver', { sender: data.sender, receiver: data.receiver, msg: data.msg })
                io.to(socket.id).emit('prvtMsgSender', { sender: data.sender, receiver: data.receiver, msg: data.msg })
            }
        }
    })


    /* **---------------------** */
    /* -------ADD FRIENDS------- */

    socket.on('requestForFriends', (value) => {
        let friends = []

        if (value === '') {
            io.to(socket.id).emit('usersIn', (friends))
            return
        }
        
        for (let user of users) {
            if ((user.user).includes(value)) {
                if (user.user !== socket.user) {
                    let friend = {}
                    friend.user = user.user
    
                    friends.push(friend)
                    return
                }
                
            }

            if (value === user.id) {
                if (user.user !== socket.user) {
                    let friend = {} 
                    friend.user = user.user
    
                    friends.push(friend)
    
                    io.to(socket.id).emit('usersIn', (friends))
                    return
                }
            }
        }

        io.to(socket.id).emit('usersIn', (friends))
    })


    /* ---END ADDING FRIENDS--- */
    /* **--------------------** */





    // user logout
    socket.on('logout', (logout) => { // kilépés esetén csak töröljük a users objectből a felhasználót, és ki is osztjuk a klienseknek broadcast segítségével
        for (let i = 0; i < users.length; i++) {
            if (users[i].user === logout.user) {
                users.splice(i, 1)
                break
            }
        }
        console.log(`Kliens kijelentkezett: ${socket.id} (felhasználónév: ${socket.user})`)
        socket.broadcast.emit('user-left', {user: logout.user})
    }) 

    socket.on('disconnect', (data) => {
        if (data === 'transport close') {
            if (socket.user !== undefined && socket.user ) {
                console.log(`Kliens lecsatlakozott: ${socket.id} (felhasználónév: ${socket.user})`);
                for (let i = 0; i < users.length; i++) {
                    if (users[i].user === socket.user) {
                        users.splice(i, 1);
                        break;
                    }
                }
            }
            socket.broadcast.emit('user-left', {user: socket.user})
        }
        
        
    })


})



const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
