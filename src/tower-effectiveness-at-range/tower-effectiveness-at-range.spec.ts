import towerEffectivenessAtRange from './'

import stubConstants from '../stub/constants'

describe('Tower Effectivenes At Range', () => {
  beforeAll(() => {
    stubConstants()
  })

  it('should calculate the power', () => {
    expect(towerEffectivenessAtRange(1, 10)).toBe(10)
    expect(towerEffectivenessAtRange(10, 10)).toBe(7.5)
    expect(towerEffectivenessAtRange(30, 10)).toBe(2.5)
  })
})