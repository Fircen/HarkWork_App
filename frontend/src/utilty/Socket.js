import { io } from "socket.io-client";

const token = localStorage.getItem('accessToken')

const socket = io('http://localhost:3001')
socket.on('connect', () => {
    console.log(socket.id)
    //socket.removeAllListeners();
    //socket.removeAllListeners('receive_message')
})
socket.emit('join_room', 'room1')

export default socket