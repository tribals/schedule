'use strict'

export function Enum (members) {
  Object.assign(this, members)
  Object.freeze(this)
}
