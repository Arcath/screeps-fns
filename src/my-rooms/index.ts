import isMyRoom from '../is-my-room'

/**
 * Returns an array of all your rooms. See `isMyRoom`
 */
export default function myRooms() {
  const rooms: Room[] = []

  Object.keys(Game.rooms).forEach((roomName) => {
    if(isMyRoom(roomName)) {
      rooms.push(Game.rooms[roomName])
    }
  })

  return rooms
}
