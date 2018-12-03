import inflate from './'
import stubGame from '../stub/game'

describe('Inflate', () => {
  it('should accept an array of strings', () => {
    stubGame({
      objectsById: {
        ab: true,
        cd: true,
        ef: true
      }
    })

    let ids = ['ab', 'cd', 'ef']

    let objects = inflate(ids)

    expect(objects.length).toBe(3)
  })
})