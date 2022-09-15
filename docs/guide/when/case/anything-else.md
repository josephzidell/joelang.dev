# `...` anything else

Similar to C-style languages' `default` case, joelang's `...` case handles a value not defined in one of the previous cases.

It must be the last case in then `when`.

```
const hex = when someString {
    'red' -> '#ff0000',
    'burnt-orange' -> '#cc5500',
    ... -> '##ffffff', // some default
};
```

## Requirement

The `...` case is **required** in all `when`s, except for a bool, for example:

```
when someBool {
    true -> do(),
    false -> doNot(),
};
```
