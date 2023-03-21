# Variables

Variable names start with a letter or underscore, followed by any combination of letters, underscores, or digits. Bool variable names may end with a `?`. It must match this regular expression: `[_a-zA-Z][_a-zA-Z0-9]*\??`.

Some valid variable names include:
`_`, `foo345`, `isDone?`

Variable names that end with a `?` will be a bool, but the `?` is not necessary.

```
// both of these are valid
const isDone = true;  ✅
const isDone? = true;  ✅

// this, however, is invalid
const num? = 5;  ❌
```

## Multiple Variables

```
// declare and assign immediately
const x, y = 0, 1;

// assign multiple return types
f getPoint -> number, number {}
const x, y = getPoint();

// declare then set later
let x, y: number, number;
x, y = getPoint();

// class (or any object) properties
this.x, this.y = getPoint();
```
