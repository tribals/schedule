'use strict';

import { Enum } from '@/enum'


export function Schedule(month) {
  this._month = month
  this._schedule = new Array()

  const monthDays = _monthDays(month)

  for (let i = 1; i <= monthDays; i++) {
    this._schedule[i] = new Shift('OFF')
  }
}

Schedule.prototype.getSchedule = function() {
  return this._schedule
}

Schedule.prototype.addShift = function(dayOfMonth, shift) {
  this._schedule[dayOfMonth] = shift
}

Schedule.prototype.removeShift = function(dayOfMonth) {
  this._schedule[dayOfMonth] = new Shift('OFF')
}

function _monthDays(month) {
  const nextMonth = month + 1;

  return new Date(_getCurrentYear(), nextMonth, 0).getDate()
}

function _getCurrentYear() {
  return new Date().getFullYear()
}

export const Months = new Enum({
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
})

export function Shift(value) {
  this._value = value
}


Shift.prototype.equals = function(other) {
  return this._value === other._value
}
