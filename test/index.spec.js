import test from 'tape'
import { constant, property } from 'lodash'

import { boolSelector, getProps, getSelect, select, simpleSelector } from '../src'
import { change, collection, state, props, state2 } from './mock'

const getSocket = property('socket')
const getSessionId = select(getSocket, 'sessionId')
const getPresenter = select(getSocket, 'presenter')

test('boolSelector', (t) => {
  const bSel = boolSelector(getSessionId)
  t.equal(bSel(state), false, 'null')
  t.equal(bSel(state2), true, 'string')
  t.end()
})

test('getProps', (t) => {
  t.equal(getProps(state, props, 1), props, 'props')
  t.end()
})
test('getSelect', (t) => {
  t.equal(getSelect(constant(collection), constant('a2'))(), collection.a2)
  t.end()
})

test('select()', (t) => {
  const getUser = property('user')
  t.equal(getUser(state), state.user, 'getUser')
  const getName = select(getUser, 'name')
  t.equal(getName(state), 'foo', 'getName')
  const getGender = select(getUser, 'gender', 'uni')
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
  simpleSelector(getSessionId, getPresenter, checkAnswer)(state2)
})
