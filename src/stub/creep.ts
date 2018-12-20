/**
 * Returns a fake `Creep` for tests
 * 
 * @param creepName The name of the creep
 */
export default function stubCreep(creepName: string) {
  return {
    name: creepName
  }
}
