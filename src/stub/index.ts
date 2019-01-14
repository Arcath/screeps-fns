import stubConstants from './constants'
import stubCreep, {CreepOptions} from './creep'
import stubGame from './game'
import stubMemory from './memory'
import stubRoom, {StubRoomOptions} from './room'

interface StubOptions {
  creeps?: CreepOptions[]
  rooms?: {[roomName: string]: StubRoomOptions}
}

export default function stub(options: StubOptions = {}) {
  stubConstants()
  stubMemory()

  let creeps = []
  let rooms = []

  if(options.creeps) {
    creeps = options.creeps.map(stubCreep)
  }

  if(options.rooms) {
    rooms = Object.keys(options.rooms).map((name) => stubRoom(name, options.rooms[name]) )
  }

  stubGame({
    creeps,
    rooms
  })
}
