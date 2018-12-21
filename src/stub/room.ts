interface RoomOptions {
  controller?: {
    exists: boolean
    my: boolean
  }
}

export default function stubRoom(name: string, options: RoomOptions = {}) {
  let controller

  if(options.controller && options.controller.exists) {
    controller = {
      my: options.controller.my
    }
  }

  return {
    controller,
    name
  }
}
