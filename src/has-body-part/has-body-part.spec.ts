import hasBodyPart from './'

import stubCreep from '../stub/creep'
import stubConstants from '../stub/constants'

describe('Has Body Part', () => {
  beforeAll(() => {
    stubConstants()
  })

  it('should return a boolean value', () => {
    let creep = stubCreep({
      name: 'foo',
      body: [MOVE, CARRY]
    })

    expect(hasBodyPart(creep, MOVE)).toBe(true)
    expect(hasBodyPart(creep, ATTACK)).toBe(false)
  })
})