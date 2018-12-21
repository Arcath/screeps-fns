import isMyRoom from './'
import stubGame from '../stub/game'
import stubRoom from '../stub/room'

describe('Is My Room', () => {
  beforeAll(() => {
    stubGame({
      rooms: [
        stubRoom('W1N1', {
          controller: {
            exists: true,
            my: true
          }
        }),
        stubRoom('W2N1', {
          controller: {
            exists: true,
            my: false
          }
        }),
        stubRoom('W2N2', {
          controller: {
            exists: false,
            my: false
          }
        })
      ]
    })
  })

  it('should return true for a room that is mine', () => {
    expect(isMyRoom('W1N1')).toBe(true)
    expect(isMyRoom(Game.rooms['W1N1'])).toBe(true)
  })

  it('should return false if the room is not mine or not visible', () => {
    expect(isMyRoom('W2N1')).toBe(false)
    expect(isMyRoom('W3N1')).toBe(false)
    expect(isMyRoom('W2N2')).toBe(false)
  })
})