# Number

Numbers in joelang are meant to be intuitive and to represent real-world use cases.

Numbers can have commas (`,`), a period (`.`), and an exponent (`^e`)

Here are some examples:
- `123`
- `-500`
- `9,876`
- `100001.0002`
- `3^e2`

## Number ranges

Ranges can be easily created with 2 numbers, and are inclusive on both sides, always. If you want the last number be exclusive, substract one.

```
const oneToThree = 1..3; // will generate a number array [1, 2, 3]
```

```
1^e2..3^e2 // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Ranging downward

Ranges can go downward

```
5..-5 // [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]
```

### Some exceptions

Some exceptions to ranges are floats. The example would not work

```
1.0..4.0 // invalid since these contain decimals
```

## Array of numbers

An [`array`](array.md) of numbers is defined easily enough, but does have a gotcha. **Make sure to put a space after each comma**

```
[1, 200] // array has 2 items
```

If there is no space after the comma, the lexer will interpret the comma as part of the preceeding number and can cause unintended behavior.
```
[1,200] // array has 1 item
```
