import clearDeadCreepsFromMemory from './'
import stubMemory from '../stub/memory'
import stubGame from '../stub/game'
import stubCreep from '../stub/creep'

describe('Clear Dead Creeps From Memory', () => {
  it('should remove dead creeps', () => {
    stubMemory({
      creeps: {
        'foo': {foo: 'bar'},
        'bar': {foo: 'bar'}
      }
    })
    stubGame({
      creeps: [
        stubCreep({
          name: 'foo',
          body: []
        })
      ]
    })

    expect(Object.keys(Memory.creeps).length).toBe(2)

    clearDeadCreepsFromMemory()

    expect(Object.keys(Memory.creeps).length).toBe(1)
  })
})