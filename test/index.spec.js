import test from 'tape'
import { get } from 'lodash/fp'
import { constant, flow, identity, nthArg, property } from 'lodash'

import {
  boolSelector, getAll, getObjIds, getProp, getProps, getSelect,
  select, simpleSelector, structuredSelector, thunkSelect,
} from '../src'
import { change, collection, state, props, state2, offices, world, officesFull } from './mock'
import showrooms from './showrooms'

const getSocket = property('socket')
const getSessionId = select(getSocket, 'sessionId')
const getPresenter = select(getSocket, 'presenter')

test('boolSelector', (t) => {
  const bSel = boolSelector(get('foo'))
  t.equal(bSel({ foo: null }), false, 'null')
  t.equal(bSel({ foo: 'hi' }), true, 'string')
  t.equal(bSel({ foo: {} }), false, 'empty obj')
  t.end()
})

test('getProps', (t) => {
  t.equal(getProps(state, props, 1), props, 'props')
  t.end()
})
test('getProp', (t) => {
  const getFriendId = getProp('friendId')
  t.equal(typeof getFriendId, 'function')
  t.equal(getFriendId(null, { friendId: 'Thom' }), 'Thom')
  t.end()
})
test('getSelect', (t) => {
  t.equal(getSelect(identity, constant('a2'))(collection), collection.a2)
  t.end()
})

test('select()', (t) => {
  const getUser = property('user')
  t.equal(getUser(state), state.user, 'getUser')
  const getName = select(getUser, 'name')
  t.equal(getName(state), 'foo', 'getName')
  const getGender = select(getUser, 'gender', 'uni')
  t.equal(getGender(state), 'bar', 'gender')
  const stateNoGen = state.without(['user', 'gender'])
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
test('structuredSelector', (t) => {
  const obj = { uid: property('user.id'), connect: property('socket.connect'), foo: 'bar' }
  const selected = structuredSelector(obj)(state)
  t.deepEqual(selected, { uid: 'anon', connect: true, foo: 'bar' })
  t.end()
})
test('thunkSelect', (t) => {
  const getState = constant(state)
  t.equal(thunkSelect(property('user.id'))(null, getState), 'anon')
  const selector = flow(nthArg(1), property('id'))
  t.equal(thunkSelect(selector, { id: 'foo', bar: 'cat' })(null, getState), 'foo')
  t.end()
})
