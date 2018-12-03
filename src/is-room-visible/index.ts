/**
 * Returns a boolean value for if the room is visible.
 * 
 * @param roomName The name of the room to test
 */
export default function isRoomVisible(roomName: string) {
  return roomName in Game.rooms
}
