interface StubMemoryOptions {
  creeps?: {
    [creepName: string]: any
  }
}

/**
 * Stubs the `Memory` Object
 * 
 * @param options An instance of `StubMemoryOptions`
 */
export default function stubMemory(options: StubMemoryOptions = {}) {
  const g = global as any

  g.Memory = {
    creeps: (options.creeps ? options.creeps : {})
  }
}
