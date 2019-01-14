import countBodyPart from './'

import stubCreep from '../stub/creep'
import stubConstants from '../stub/constants'

describe('Count Body part', () => {
  beforeAll(() => {
    stubConstants()
  })

  it('should count the body parts', () => {
    let creep = stubCreep({
      name: 'test',
      body: [MOVE, MOVE, CARRY]
    })

    expect(countBodyPart(creep, MOVE)).toBe(2)
    expect(countBodyPart(creep, CARRY)).toBe(1)
    expect(countBodyPart(creep, ATTACK)).toBe(0)
  })
})