const fns = require('./screeps-fns')

const stubGame = require('./stub/game').default

describe('JS', () => {
  it('should work in plain js', () => {
    stubGame()

    expect(fns.ivm()).toBe(false)
  })
})