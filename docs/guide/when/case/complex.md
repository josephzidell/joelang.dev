# Complex cases

If you need to do multiple things in a case, wrap in braces and include a `return`.

```
when someNumber {
	1, 2 -> {
		doThing1();
		doThing2();

		return value;
	},
}
```
