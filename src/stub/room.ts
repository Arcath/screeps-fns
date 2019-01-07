export interface StubRoomOptions {
  controller?: {
    exists: boolean
    my: boolean
  }
  energyCapacityAvailable?: number
  energyAvailable?: number,
  memory?: any,
  storage?: any,
  terminal?:any,
  objects?: string[]
}

/**
 * Create a fake room object for use in tests
 * 
 * @param name The stubbed rooms name
 * @param options An instance of `RoomOptions`
 */
export default function stubRoom(name: string, options: StubRoomOptions = {}): Room {
  let controller

  if(options.controller && options.controller.exists) {
    controller = {
      my: options.controller.my
    }
  }

  return {
    controller,
    name,
    energyAvailable: (options.energyAvailable ? options.energyAvailable : 100),
    energyCapacityAvailable: (options.energyCapacityAvailable ? options.energyCapacityAvailable : 100),
    memory: (options.memory ? options.memory : {}),
    storage: (options.storage ? options.storage : undefined),
    terminal: (options.terminal ? options.terminal : undefined),
    visual: undefined,
    serializePath,
    find: (constant: FindConstant) => { return find(options.objects, constant) }
  } as any
}

const serializePath = (path: PathStep[]) => {
  let result = ''

  if(!path.length) {
    return result;
  }
  
  if(path[0].x < 0 || path[0].y < 0) {
      throw new Error('path coordinates cannot be negative')
  }

  result += path[0].x > 9 ? path[0].x : '0' + path[0].x
  result += path[0].y > 9 ? path[0].y : '0' + path[0].y

  for(var i=0; i < path.length; i++) {
      result += path[i].direction
  }

  return result
}

const find = (ids: undefined | string[], constant: FindConstant) => {
  const objects: any[] = ids.map(Game.getObjectById)

  switch(constant){
    case FIND_SOURCES:
      return objects.filter((object) => { return object.__type === 'source' })
  }

  return []
}