import objectFromId from '../object-from-id'

/**
 * Turn an array of object IDs into Objects.
 * 
 * @param ids An array of IDs to get the objects for.
 */
export default function objectsFromIds<T>(ids: string[]){
  return ids.map((id) => objectFromId<T>(id))
}
