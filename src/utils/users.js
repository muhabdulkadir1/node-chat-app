const users = []

// add User 
const addUser = ({id, username, room}) => {
    // Clean the data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data 
    if (!username || !room) {
        return {
            error: 'Username and room required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username and
    if (existingUser) {
        return {
            error: 'Username is already in use'
        }
    }

    // Store user information
    const user = { id, username, room }
    users.push(user)
    return user
}

// remove User
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// get User
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// get Users in a room
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}