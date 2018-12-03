import isRoomVisible from '../is-room-visible'

/**
 * Returns true if in the simulator.
 */
export default function isSimulation() {
  return isRoomVisible('sim')
}
