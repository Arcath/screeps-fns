export interface CreepOptions {
  name: string
  body: BodyPartConstant[]
}

/**
 * Returns a fake `Creep` for tests
 * 
 * @param creepName The name of the creep
 */
export default function stubCreep(options: CreepOptions): Creep {
  return {
    body: options.body.map((type) => {
      return {
        type
      }
    }),
    name: options.name
  } as any
}
