interface StubObjectOptions{
  id: string
  type: StructureConstant | 'source',
}

export default function stubObject(options: StubObjectOptions){
  return {
    id: options.id,
    __type: options.type
  }
}