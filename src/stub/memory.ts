interface StubMemoryOptions {
  creeps?: {
    [creepName: string]: any
  }
}

export default function stubMemory(options: StubMemoryOptions = {}) {
  const g = global as any

  g.Memory = {
    creeps: (options.creeps ? options.creeps : {})
  }
}
