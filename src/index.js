import {
  flow, flowRight, get, isFunction, nthArg, over, partial, property, spread,
} from 'lodash'
import fpDefaultTo from 'lodash/fp/defaultTo'
import { toBool } from 'cape-lodash'

// Select something and turn it into boolean. boolSelector(selector)(state)
export const boolSelector = partial(flowRight, toBool)

// Returns the 2nd arg.
export const getProps = nthArg(1)

// Returns the collection property at key as determined by idSelector.
export function getSelect(collectionSelector, idSelector) {
  return flow(over([ collectionSelector, idSelector ]), spread(get))
}

// Send arg to selector then get property at path. Apply defaultValue.
export function select(selector, path, defaultValue = null) {
  if (!isFunction(selector)) throw new Error('Selector must be a function.')
  return flow(selector, property(path), fpDefaultTo(defaultValue))
}

// See createSelector(). This has no memoization.
export function simpleSelector(...funcs) {
  const last = funcs.pop()
  return flow(over(funcs), spread(last))
}
