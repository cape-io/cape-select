# cape-select v2.0.0

A few `reselect` inspired helper utility/selector functions. Using functional programming as much as possible with the help of my good friend `lodash`.

Please view source for explanation and tests for usage.

- `getProps(state, props)` - Returns the 2nd arg.
- `getSelect(getCollection, idSelector)` - Returns the collection property at key as determined by idSelector.
- `select(selector, path)` - Send arg to selector then get property at path. Apply defaultValue.
- `simpleSelector(select1, select2, reducer)` - `createSelector()` without memoization.
- `boolSelector(selector)(state)` - Select something and turn it into boolean.
