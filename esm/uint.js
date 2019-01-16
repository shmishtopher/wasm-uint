import { int_u } from './int_u'

export function uint8 (value) {
  if (value < 0 || value > 255) {
    throw new Error(`${value} is not in [0, 255]`)
  } else {
    return int_u(value, 1)
  }
}

export function uint16 (value) {
  if (value < 0 || value > 65536) {
    throw new Error(`${value} is not in [0, 65535]`)
  } else {
    return int_u(value, 2)
  }
}

export function uint32 (value) {
  if (value < 0 || value > 4294967295) {
    throw new Error(`${value} is not in [0, 4294967295]`)
  } else {
    return int_u(value, 4)
  }
}