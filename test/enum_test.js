'use strict';

import { assert } from 'chai'

import { Enum } from '@/enum'


describe('Enum', function() {
  it('cannot add new members', function() {
    const myEnum = new Enum({ FOO: 'foo', BAR: 'bar' })

    assert.throws(function() {
      myEnum.BAZ = 'baz'
    }, TypeError)
  })

  it('cannot change value of member', function() {
    const myEnum = new Enum({ FOO: 'foo', BAR: 'bar' })

    assert.throws(function() {
      myEnum.FOO = 'FOO'
    }, TypeError)
  })

  it('cannot delete existing member', function() {
    const myEnum = new Enum({ FOO: 'foo', BAR: 'bar' })

    assert.throws(function() {
      delete myEnum.FOO
    }, TypeError)
  })
})
