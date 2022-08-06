const users = []

// addUser removeUser getUser getUsersInRoom

const addUser = ({id, username, room}) => {
	//clean data
	username = username.trim().toLowerCase(),
	room = room.trim().toLowerCase()

	//validate the data
	if(!username || !room){
		return {
			error: "Username and room are required"
		}
	}
	//check for existing user
	const existingUser = users.find((user) => {
		return user.room === room && user.username === username
	})

	if(existingUser){
		return {
			error: "Username is already in use!"
		}
	}

	//store user
	const user = {id, username, room}
	users.push(user)
	return {user}
}

//-1 = no match. .spice allows us to remove items from an array by their index
//findIndex returns the position of that item in an array

const removeUser = (id) => {
	const index = users.findIndex((user) => {
		return user.id === id
	})

	if(index !== -1){
		return users.splice(index, 1)[0] // returns an array of removed items. 1 signifies how many items are required. [0] indicates the position of our item in the spliced array
	}

	
}

const getUser = (id) => {
	return users.find((user) => user.id === id)
}

//getUsersInRoom
const getUsersInRoom = (room) => {
	room.trim().toLowerCase()
	return users.filter((user) => user.room === room)
}

module.exports = {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
}