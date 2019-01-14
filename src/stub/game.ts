import {CreepOptions} from './creep'

interface StubGameOptions {
  objectsById?: {
    [id: string]: any
  }
  ivm?: boolean
  cpuLimit?: number
  rooms?: any[]
  creeps?: CreepOptions[]
}

/**
 * Stubs `Game` for use in tests
 * 
 * Takes options that can be used to setup `Game` in a specific way.
 * 
 * @param options The options to use for the game state.
 */
export default function stubGame(options: StubGameOptions = {}) {
  const g = global as any

  g.Game = {
    cpu: {
      limit: (options.cpuLimit ? options.cpuLimit : 20)
    },
    creeps: {},
    getObjectById: (id: string) => {
      return (options.objectsById ? options.objectsById[id] : null)
    },
    rooms: {}
  }

  if(options.rooms) {
    options.rooms.forEach((room) => {
      g.Game.rooms[room.name] = room
    })
  }

  if(options.creeps) {
    options.creeps.forEach((creep) => {
      g.Game.creeps[creep.name] = creep
    })
  }

  if(options.ivm) {
    g.Game.cpu.getHeapStatistics = () => {
      return {}
    }
  }
}
