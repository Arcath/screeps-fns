import ivm from './'

import stubGame from '../stub/game'

describe('IVM', () => {
  it('should return true when running in ivm', () => {
    stubGame({
      ivm: true
    })

    expect(ivm()).toBe(true)
  })

  it('should return false when not running in ivm', () => {
    stubGame({
      ivm: false
    })

    expect(ivm()).toBe(false)
  })
})