# cape-select v2.3.0

A few `reselect` inspired helper utility/selector functions. Using functional programming as much as possible with the help of my good friend `lodash`.

Please view source for explanation and tests for usage.

- `boolSelector(selector)(state)` - Select something and turn it into boolean.
- `getProps(state, props)` - Returns the 2nd arg.
- `getProp(state, props)` - Returns property of 2nd arg.
- `getSelect(getCollection, idSelector)` - Returns the collection property at key as determined by idSelector.
- `getAll(collection, idArray)` - Curried. Returns an array of values from collection based on keys from idArray. (basically `_.at`)
- `getObjIds(collection, objIds)`
- `select(selector, path, defaultValue = null)` - Send arg to selector then get property at path. Apply defaultValue.
- `simpleSelector(select1, select2, reducer)` - `createSelector()` without memoization.
- `structuredSelector(object)` - like createStructuredSelector without memoization. If value isn't a function it gets passed along untouched.
- `thunkSelect(selector, props)` - Send getState() and props to selector from thunk arg signature.
