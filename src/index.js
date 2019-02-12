import {
  defaultTo, flow, get, isFunction, mapValues,
  negate, nthArg, over, property, spread,
} from 'lodash/fp'

import { isWorthless } from 'understory'

// Select something and turn it into boolean. boolSelector(selector)(state)
export const boolSelector = selector => flow(selector, negate(isWorthless))

// Returns the 2nd arg.
export const getProps = nthArg(1)
export const selectProp = path => flow(getProps, get(path))
export const getProp = selectProp

// Returns the collection property at key as determined by idSelector.
export function getSelect(collectionSelector, idSelector) {
  return flow(over([idSelector, collectionSelector]), spread(get))
}

// Send arg to selector then get property at path. Apply defaultValue.
export function select(selector, path, defaultValue = null) {
  if (!isFunction(selector)) throw new Error('Selector must be a function.')
  return flow(selector, property(path), defaultTo(defaultValue))
}

// See createSelector(). This has no memoization.
export function simpleSelector(...funcs) {
  const last = funcs.pop()
  return flow(over(funcs), spread(last))
}
export function structuredSelector(objectSelector) {
  return (...args) =>
    mapValues(selector => (isFunction(selector) ? selector(...args) : selector), objectSelector)
}
export function thunkSelect(selector, props) {
  if (!isFunction(selector)) throw new Error('selector must be a function')
  return (dispatch, getState) => selector(getState(), props)
}
