# Object (POJO)

Objects in joelang are often called POJOs, or Plain Ol' Joe Objects.

Objects have a shape, similar to [tuples](tuple.md).

```
{
	a: 1,
	b: 'foo',
	c: [3],
	d: {
		foo: 'bar',
		bar: <true, 5>,
	},
}

/**
 * The shape is:
 * {
 * 		a: number,
 * 		b: string,
 * 		c: number[],
 * 		d: {                     // nested object
 * 			foo: string,
 * 			bar: <bool, number>, // tuple
 * 		},
 * }
 */
```

## Conditional items

Unfortunately, objects do not support conditional items like arrays do, as it would cause the shape to be invalid.

Alternatively, a [`ternary`](../conditionals.md#ternary) may be used

```
{
	count: 1,
	color: someCondition ? 'burnt-orange' : '', // will always be defined, so the shape is correct
	needSugar: true,
}
```
