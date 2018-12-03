/**
 * Takes an array of game objects and _deflates_ them into an array of strings that can be placed in memory.
 * 
 * @param objects An array of game objects to deflate.
 * 
 * @returns An array of strings
 */
export default function deflate(objects: Array<{id: string}>) {
  return objects.map((object) => {
    return object.id
  })
}
