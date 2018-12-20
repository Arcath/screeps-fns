import isCreepAlive from '../is-creep-alive'

/**
 * Removes dead creeps from the Memory Object
 */
export default function clearDeadCreepsFromMemory() {
  for(const creepName in Memory.creeps) {
    if(!isCreepAlive(creepName)) {
      delete Memory.creeps[creepName]
    }
  }
}
