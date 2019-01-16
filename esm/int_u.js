export function int_u (value, padTo = 4) {
  let uint = []

  do {
    uint.push(value & 0xFF)
    value = value >> 8
  } while (value > 0)

  return Uint8ClampedArray.from(...zeros(padTo - uint.length), ...uint)
}

function* zeros (length) {
  for (let i = 0; i < length; i++) {
    yield 0x00
  }
}