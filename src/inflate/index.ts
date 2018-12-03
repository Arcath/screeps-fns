import objectsFromIds from '../objects-from-ids'

/**
 * Infalte is an alias for `objectsFromIds`
 * 
 * @see objectsFromIds
 */
export default function inflate<T>(ids: string[]){
  return objectsFromIds<T>(ids)
}
