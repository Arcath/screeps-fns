import cacheInTick from '../cache-in-tick'
import isMyRoom from '../is-my-room'

/**
 * Returns an array of all your rooms. See `isMyRoom`
 * 
 * Uses `cacheInTick` to reduce the number of iterations on sunsequent calls.
 */
export default function myRooms() {
  return cacheInTick('_fns_my_rooms', () => {
    const rooms: Room[] = []

    Object.keys(Game.rooms).forEach((roomName) => {
      if(isMyRoom(roomName)) {
        rooms.push(Game.rooms[roomName])
      }
    })

    return rooms
  })
}
