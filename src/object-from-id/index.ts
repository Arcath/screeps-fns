/**
 * Get an object from its ID.
 * 
 * @param id The id of the object you want to retrive
 */
export default function objectFromId<T>(id: string) {
  return Game.getObjectById<T>(id)
}
