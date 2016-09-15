import test from 'tape'
import { isFunction } from 'lodash'

import { isFalse, toBool, getDefault, getProps, select, firstValArg } from '../src'
import { state, props } from './mock'

test('isFalse', (t) => {
  t.ok(isFunction(isFalse), 'isFunc')
  t.false(isFalse(true), 'true is not false')
  t.false(isFalse(null), 'null is not false')
  t.true(isFalse(false), 'false is false')
  t.end()
})

test('firstValArg', (t) => {
  t.ok(isFunction(isFalse), 'isFunc')
  t.equal(firstValArg(1, 0, 2), 1, 'arg0')
  t.equal(firstValArg(0, 0, 2), 2, 'arg2')
  t.equal(firstValArg(undefined, null, '', 'hot'), 'hot', 'arg3')
  t.end()
})

test('toBool', (t) => {
  t.false(toBool({}), 'empty obj')
  t.true(toBool({ foo: 'far' }), 'obj')
  t.false(toBool([]), 'empty arr')
  t.true(toBool([ 1 ]), 'arr')
  t.false(toBool(null), 'null')
  t.false(toBool(undefined), 'und')
  t.false(toBool(''), 'empty str')
  t.true(toBool('kai'), 'string')
  t.true(toBool(1), 'num')
  t.end()
})
test('getDefault', (t) => {
  t.equal(getDefault('item.id', 'title')(props), 'bar', 'item.id')
  t.equal(getDefault('item.nothing', 'title')(props), 'strawberry', 'title')
})

test('getProps', (t) => {
  t.equal(getProps(state, props, 1), props, 'props')
  t.end()
})

test('select()', (t) => {
  const getUser = select('user')
  t.equal(getUser(state), state.user, 'getUser')
  const getName = select('name', getUser)
  t.equal(getName(state), 'foo', 'getName')
  const getGender = select('gender', getUser, 'uni')
  t.equal(getGender(state), 'bar', 'gender')
  const stateNoGen = state.without([ 'user', 'gender' ])
  t.equal(getGender(stateNoGen), 'uni', 'getGender missing, use default.')
  t.end()
})

test('simpleSelector', (t) => {
  function checkAnswer(arg1, arg2, arg3) {
    t.equal(arg1, change.sessionId, 'arg1')
    t.equal(arg2, change.presenter, 'arg2')
    t.end(arg3)
  }
  const simple = simpleSelector(getSessionId, getPresenter, checkAnswer)
  simple(state2)
})
