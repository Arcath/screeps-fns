import sourcesInRoom from './'

import stubConstants from '../stub/constants'
import stubGame from '../stub/game'
import stubRoom from '../stub/room'
import stubObject from '../stub/object'

describe('Sources in Room', () => {
  beforeAll(() => {
    stubGame({
      objectsById: {
        'foo': stubObject({
          id: 'foo',
          type: 'source'
        }),
        'bar': stubObject({
          id: 'bar',
          type: 'source'
        })
      }
    })

    stubConstants()
  })

  it('should find sources', () => {
    let room = stubRoom('W1N1', {
      objects: [
        'foo',
        'bar'
      ]
    })

    let sources = sourcesInRoom(room)

    expect(sources.length).toBe(2)
  })
})