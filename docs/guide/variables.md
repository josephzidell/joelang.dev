# Variables

Variable names start with a letter or underscore, followed by any combination of letters, underscores, or digits. Bool variable names may end with a `?`. It must match this regular expression: `[_a-zA-Z][_a-zA-Z0-9]*\??`.

Some valid variable names include:
`_`, `foo345`, `isDone?`

Variable names that end with a `?` will be a bool, but the `?` is not necessary.

```
// both of these are valid
const isDone = true;
const isDone? = true;

// this, however, is invalid
const num? = 5;
```
