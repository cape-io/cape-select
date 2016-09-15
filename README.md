# cape-select v1.0.0

A few reselect/redux inspired helper utility/selector functions.

Please view source for explaination and tests for usage.

- `isFalse` - Returns true if sent a value that is exactly false.
- `firstValArg` - Find the first truthy argument value.
- `toBool` - Turn empty objects and arrays to false. Turn other values into a boolean.
- `getDefault` - Given two paths, select the first one that is defined.
- `getProps` - Returns the 2nd arg.
- `getSelect` - Returns the collection property at key as determined by idSelector.
- `select` - Send arg to selector then get property at path. Apply defaultValue.
- `simpleSelector` - `createSelector()` without memoization.
- `boolSelector(selector)(state)` - Select something and turn it into boolean.
