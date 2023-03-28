# Multiple Values Case

Each case may have multiple values, separated by commas:

```
const size = when someNumber {
    0, 1 -> 'small',
    2, 3, 4 -> 'medium',
    5, 6 -> 'large',
    ... -> 'other',
};
```
