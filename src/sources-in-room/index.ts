import cacheInTick from '../cache-in-tick'

/**
 * Finds all the sources in a room and caches the result with `cacheInTick`
 *
 * 
 * @param room The room to find sources in.
 */
export default function sourcesInRoom(room: Room) {
  return cacheInTick(`_fns_sources_in_room_${room.name}`, () => {
    return room.find(FIND_SOURCES)
  })
}
