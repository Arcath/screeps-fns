/**
 * Returns true if the object is visible to your code.
 * 
 * @param id the id of the object to check
 */
export default function isObjectVisible(id: string) {
  return !!Game.getObjectById(id)
}
