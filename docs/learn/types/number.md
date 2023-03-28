# Number

Numbers in joelang are meant to be intuitive and to represent real-world use cases.

Numbers can have underscores (`_`), a period (`.`), and an exponent (`^e`)

Here are some examples:
- `123`
- `-500`
- `9_876`
- `100001.0002`
- `3^e2`

## Number ranges

Ranges can be easily created with 2 numbers, and are inclusive on both sides, always. If you want the last number be exclusive, subtract one.

```
1 .. 3;
1^e2 .. 3^e2
```

### Ranging downward

Ranges can go downward

```
5 .. -5
```

### Some exceptions

Some exceptions to ranges are decimals. The example would not work

```
1 .. 4 // valid  ✅
1.0 .. 4.0 // invalid since these contain decimals  ❌
```

## Underscores

You may use an underscore as a separator for readability and it has no effect on the value.

```
1_200 == 1200
```

## When using exponents

When using an exponential number with an equality check, be sure to wrap your number in parens:

```
(1^e2) == (3^e2)  ✅
1^e2 == 3^e2  ❌

(1^e2) < (3^e2)  ✅
1^e2 < 3^e2  ❌

// etc ...
```
