import isObjectVisible from './'

import stubGame from '../stub/game'

describe('Is Object Visible', () => {
  beforeAll(() => {
    stubGame({
      objectsById: {
        foo: true
      }
    })
  })

  it('should return true if the object is visible', () => {
    expect(isObjectVisible('foo')).toBe(true)
  })

  it('should return false if the object is hidden', () => {
    expect(isObjectVisible('bar')).toBe(false)
  })
})