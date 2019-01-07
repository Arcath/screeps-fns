interface StubObjectOptions {
  id: string
  type: StructureConstant | 'source',
}

export default function stubObject(options: StubObjectOptions) {
  return {
    __type: options.type,
    id: options.id
  }
}
