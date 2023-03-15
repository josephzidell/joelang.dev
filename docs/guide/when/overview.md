# When

Pattern matching is done with the `when` keyword and a variable.

Each branch can be one or more values, a range or array of possible values, or `...` for anything else (similar to `default` in C-type languages)

The types of each values must match the type of the conditional variable.
The return type of each branch must be the same.


```
// set a string variable
const size = when someNumber {
	// if someNumber is 1 or 2
	1, 2 -> 'small',

	// between 3 and 10 (inclusive)
	3 .. 10 -> 'medium',

	// do stuff before, and use explicit return
	11 -> {
		doThing1();
		doThing2();

		return 'large';
	},

	// or call a function, whose return value will be used
	12 -> someFunction(),

	// any other value
	... -> 'off the charts',
}

// `when`s don't have to return anything
when someNumber {
	// call a function
	1, 2 -> small(),

	3 .. 10 -> medium(),

	// fallback function to call
	... -> offTheCharts(),
}
```
