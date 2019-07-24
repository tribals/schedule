'use strict'

import { assert } from 'chai'

import { Schedule, Months, Shift } from '@/schedule'

describe('Schedule', function () {
  it('is empty when created', function () {
    const schedule = new Schedule(Months.JULY)

    assert.isTrue(schedule.getSchedule().every(day => day.equals(new Shift('OFF'))))
  })

  describe('.addShift()', function () {
    it('adds shift to schedule', function () {
      const schedule = new Schedule(Months.JULY)

      schedule.addShift(1, new Shift('DAY'))

      assert.isTrue(schedule.getSchedule()[1].equals(new Shift('DAY')))
    })
  })

  describe('.removeShift()', function () {
    it('removes shift from schedule', function () {
      const schedule = new Schedule(Months.JULY)

      schedule.addShift(1, new Shift('DAY'))

      schedule.removeShift(1)

      assert.isTrue(schedule.getSchedule().every(day => day.equals(new Shift('OFF'))))
    })
  })
})
