'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function int_u (value, padTo = 4) {
  let uint = [];

  do {
    uint.push(value & 0xFF);
    value = value >> 8;
  } while (value > 0)

  return Uint8ClampedArray.from(...zeros(padTo - uint.length), ...uint)
}

function* zeros (length) {
  for (let i = 0; i < length; i++) {
    yield 0x00;
  }
}

function uint8 (value) {
  if (value < 0 || value > 255) {
    throw new Error(`${value} is not in [0, 255]`)
  } else {
    return int_u(value, 1)
  }
}

function uint16 (value) {
  if (value < 0 || value > 65536) {
    throw new Error(`${value} is not in [0, 65535]`)
  } else {
    return int_u(value, 2)
  }
}

function uint32 (value) {
  if (value < 0 || value > 4294967295) {
    throw new Error(`${value} is not in [0, 4294967295]`)
  } else {
    return int_u(value, 4)
  }
}

exports.uint8 = uint8;
exports.uint16 = uint16;
exports.uint32 = uint32;
exports.int_u = int_u;
