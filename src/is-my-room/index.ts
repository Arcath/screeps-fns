import isRoomVisible from '../is-room-visible'

/**
 * Returns true if the room has a controller and is yours.
 * 
 * @param roomName A `Room` or the name of a room.
 */
export default function isMyRoom(roomName: string | Room) {
  let room: Room

  if(typeof roomName === 'string') {
    if(!isRoomVisible(roomName)) {
      return false
    }

    room = Game.rooms[roomName]
  } else {
    room = roomName
  }

  if(!room.controller) {
    return false
  }

  return room.controller.my
}
