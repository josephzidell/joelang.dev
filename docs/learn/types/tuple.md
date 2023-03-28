# Tuple

Tuples may contain mixed data types, which define its shape:

```
<1, 'pizza', 3.14> // the shape is <number, string, number>
```

## Nested tuples

Tuples may be nested in other tuples, and each one can have a different shape:

```
<
	<1, 'pizza', 3.14>,
	true,
	@/some/file.joe,
	1 .. 3,
	<1, 2, 'fizz', 4, 'buzz'>
>
```

## Conditional items

Unfortunately, tuples do not support conditional items like arrays do, as it would cause the shape to be invalid.

Alternatively, a [`ternary`](../conditionals.md#ternary) may be used

```
<
	1,
	someCondition ? 'burnt-orange' : '', // will always be defined, so the shape is correct
	true
>
```

## Tuple Types

Tuples can be used as types:

```
// variable declaration
let foo: <bool, number>;

// function parameter
f foo (bar: <bool, number>) {}

// return type
f foo -> <bool, number> {}

// array of tuples
<bool, number>[]
```
