# Array of values

If the variable in the `when` is a number, a case may be a range:

```
const digitCount = when someNumber {
    0..9 -> 'single digit',
    10..99 -> 'double digits',
    ... -> 'etc',
};
```
