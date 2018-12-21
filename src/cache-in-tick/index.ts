let Cache: {[key: string]: any} = {}
let cacheTick = 0

/**
 * Stores the computed value for the duration of the tick.
 * 
 * @param key The key to store the value under (must be unique)
 * @param create A function that returns the value to store, will only be called once in a tick.
 */
export default function cacheInTick<T>(key: string, create: () => T): T {
  if(cacheTick !== Game.time) {
    Cache = {}
    cacheTick = Game.time
  }

  if(Cache[key]) {
    return Cache[key]
  }

  Cache[key] = create()
  return Cache[key]
}
