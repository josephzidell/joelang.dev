# Array

Arrays are defined with square brackets `[]` and may contain one type of data:

## Supported Types

- [Strings](string.md)
- [Numbers](number.md)
- [Bools](bool.md)
- [Regexes](regex.md)
- [Paths](path.md)
- [Tuples](tuple.md)
- [Objects](object.md)
- Other arrays

## Examples of valid arrays

```
[1, -2, 3_456] // array of numbers, mind the spaces  ✅
['foo', "bar"] // array of strings  ✅
[true, true, false, true] // array of bools  ✅
[@/file.joe, @/another/file.joe] // array of paths  ✅
[/[a-z]/i, /[0-9]/g] // array of regexes  ✅
[<"foo", 3.14, false>, <'bar', 900, true>] // array of tuples of shape <string, number, bool>  ✅
[{a: 4, b: 'c'}] // array of objects of shape {a: number, b: string}  ✅
```

## Assigning to a variable

When assigning to a variable, if the array has at least one item in it, joelang can infer the underlying type. On the other hand when assigning an empty array, the type must be specified.

```
// infer type is number[]
const numbers = [1, 2];  ✅

// invalid since there are mixed types
const numbers = [1, '2'];  ❌

// instantiating an empty array
let myArray: bool[] = [];  ✅
```

## Conditional items

One of the frustrations developers face is conditionally adding an item to an array. joelang has an easy syntax for that:

```
[1, 2 if condition, 3]
```

If `condition` is true, the array with be `[1, 2, 3]`. If `condition` is false, the array with be `[1, 3]`

## Nesting arrays

### Nesting arrays of the same type

Arrays can be nested, provided they are of the same type. In this example chess game, several `Piece` type arrays can together form a 2-dimensional array.

```
const chess: Piece[][] = [];
```

### Nesting arrays of different types should use a [`tuple`](tuple.md)

A `string[]` array and a `number[]` array cannot be in the same outer array. For that, you can use a [`tuple`](tuple.md)

```
const someOtherGame: <string[], number[], bool[]> = <[1, 2], ['foo', 'bar'], [true, true]>;
```
