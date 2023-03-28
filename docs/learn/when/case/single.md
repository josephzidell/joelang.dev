# Single Value Case

Each case may have a single value:

```
const hex = when someString {
    'red' -> '#ff0000',
    'burnt-orange' -> '#cc5500',
    ... -> '##ffffff', // some default
};
```