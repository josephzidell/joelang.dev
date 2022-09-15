# Return value of `when`

The `when` structure always returns a value, which may be captured in a variable or returned.
It is not required to use the return value, though.

```
const result = when someVar { /* ... */ }
```

# Use in a `return` statement

The following is valid joelang code:

```
f foo {
	// do();

    return when someVar { /* ... */ };
}

```

## `when`s don't have to return anything

```
when someNumber {
	// call a function
	1, 2 -> small(),

	3..10 -> medium(),

	// fallback function to call
	... -> offTheCharts(),
}
```
