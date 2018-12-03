import isRoomVisible from './'
import stubGame from '../stub/game'
import stubRoom from '../stub/room'

describe('Is Room Visible', () => {
  it('should return true if a room is visible', () => {
    stubGame({
      rooms: [
        stubRoom('W1N1')
      ]
    })

    expect(isRoomVisible('W1N1')).toBe(true)
  })
})