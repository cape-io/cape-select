# cape-select v1.0.0

A few `reselect` inspired helper utility/selector functions. Using functional programming as much as possible with the help of my good friend `lodash`.

Please view source for explanation and tests for usage.

- `createObj(key, value)` - curried. creates a new object with one key/val.
- `isFalse(false)` - Returns true if sent a value that is exactly false.
- `isTrue(true)` - Returns true if sent a value that is exactly true.
- `firstValArg(0, '', 'foo')` - Find the first truthy argument value.
- `toBool({})` - Turn empty objects and arrays to false. Turn other values into a boolean.
- `getDefault('path.one', 'second.path')` - Given two paths, select the first one that is defined.
- `getProps(state, props)` - Returns the 2nd arg.
- `getSelect(getCollection, idSelector)` - Returns the collection property at key as determined by idSelector.
- `select(selector, path)` - Send arg to selector then get property at path. Apply defaultValue.
- `simpleSelector(select1, select2, reducer)` - `createSelector()` without memoization.
- `boolSelector(selector)(state)` - Select something and turn it into boolean.
