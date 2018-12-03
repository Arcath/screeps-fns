import deflate from './'

describe('Deflate', () => {
  it('should deflate a list of objects', () => {
    let objects = [
      {id: 'ab'},
      {id: 'cb'}
    ]

    let ids = deflate(objects)

    expect(ids.length).toBe(2)
    expect(ids[0]).toBe('ab')
  })
})