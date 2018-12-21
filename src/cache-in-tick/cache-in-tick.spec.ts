import cacheInTick from './'

import stubGame from'../stub/game'

describe('Cache In Tick', () => {
  beforeAll(() => {
    stubGame()
  })

  it('should cache a value', () => {
    Game.time = 99
    let v = cacheInTick('test', () => {
      return Math.random()
    })

    expect(v).toBe(cacheInTick('test', () => {
      throw "failure"
    }))
  })

  it('should clear the cache on the next tick', () => {
    Game.time = 100

    expect(cacheInTick('test', () => {
      return true
    })).toBe(true)
  })
})