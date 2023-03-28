# For Loops

In Joelang, `for` loops are used to iterate over *something*. That *something* may be:
- A Range
- An array
- Multiple item access

Here are some examples:

```
// range
for let i in 0 .. 9 {}

// array
for let i in [1, 2, 3] {}

// accessing multiple items from the array
for let i in ary[0, 2, 4] {}

// accessing a range from an array
for let i in ary[0 .. 4] {}
```

## Control

To end the current iteration and go to the next, `next` (similar to `continue` in other langs).

To exit the entire loop, `done` (similar to `break` in other langs).
