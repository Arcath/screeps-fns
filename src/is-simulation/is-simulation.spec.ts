import isSimulation from './'
import stubGame from '../stub/game'
import stubRoom from '../stub/room'

describe('Is Simulation', () => {
  it('should return false if not in the simulator', () => {
    stubGame()

    expect(isSimulation()).toBe(false)
  })

  it('should return true if in the simulator', () => {
    stubGame({
      rooms: [
        stubRoom('sim')
      ]
    })
  })
})