import clearDeadCreepsFromMemory from './'
import stubMemory from '../stub/memory'
import stubGame from '../stub/game'

describe('Clear Dead Creeps From Memory', () => {
  it('should remove dead creeps', () => {
    stubMemory({
      creeps: {
        'foo': {foo: 'bar'}
      }
    })
    stubGame()

    expect(Object.keys(Memory.creeps).length).toBe(1)

    clearDeadCreepsFromMemory()

    expect(Object.keys(Memory.creeps).length).toBe(0)
  })
})