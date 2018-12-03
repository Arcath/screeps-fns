/**
 * Returns true if the creep is alive.
 * 
 * @param creepName The name of the creep to check
 * 
 * @returns A boolean value
 */
export default function isCreepAlive(creepName: string) {
  return creepName in Game.creeps
}
