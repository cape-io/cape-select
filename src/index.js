import {
  cond, curry, defaultTo, find, flow, flowRight, get, identical, isEmpty, isObject,
  negate, nthArg, over, partial, property, spread, stubTrue,
} from 'lodash'
import fpDefaultTo from 'lodash/fp/defaultTo'

export const createObj = curry((key, val) => ({ [key]: val }))

// Returns true if sent a value that is exactly false.
export const isFalse = identical(false)
export const isTrue = identical(true)
// Find the first truthy argument value.
export const firstValArg = flow(Array, find)

// Turn empty objs and arrays to false. Turn other vals into a boolean.
export const toBool = cond([ [ isObject, negate(isEmpty) ], [ stubTrue, Boolean ] ])

// Select something and turn it into boolean. boolSelector(selector)(state)
export const boolSelector = partial(flowRight, toBool)

// Given two paths, select the first one that is defined.
export function getDefault(path1, path2) {
  return flow(
    over([ property(path1), property(path2) ]),
    spread(defaultTo)
  )
}

// Returns the 2nd arg.
export const getProps = nthArg(1)

// Returns the collection property at key as determined by idSelector.
export function getSelect(collectionSelector, idSelector) {
  return flow(over([ collectionSelector, idSelector ]), spread(get))
}

// Send arg to selector then get property at path. Apply defaultValue.
export function select(selector, path, defaultValue = null) {
  return flow(selector, property(path), fpDefaultTo(defaultValue))
}

// See createSelector(). This has no memoization.
export function simpleSelector(...funcs) {
  const last = funcs.pop()
  return flow(over(funcs), spread(last))
}
