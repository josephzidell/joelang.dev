# Access

Joelang supports several ways to get data out of arrays, objects, strings, and tuples.

Suppose we have these variables

```
const arr: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const obj = {
	name: 'Joe',
	hobby: 'Coding',
	friends: ['Moe', 'Larry', 'Curly'],
};

const str = 'ABCDEFG';

const tpl = <1, 'abc', true, 3.14, {name: 'Joe'}>;
```

### Get a single item/property/char

::: code-group

```ts [Array (items)]
// by numerical index

arr[0] // 'A'

const index = 3;
arr[index] // 'D'
```

```ts [Object (properties)]
// by property name

// dot notation
obj.name // 'Joe'
obj.friends // ['Moe', 'Larry', 'Curly']

// bracket notation
obj['name'] // 'Joe'

// using a variable
const prop = 'name';
obj[prop] // 'Joe'
```

```ts [String (chars)]
// by numerical index

str[0] // 'A'

const index = 3;
str[index] // 'D'
```

```ts [Tuple (items)]
// by numerical index

tpl[0] // 1  ✅

// Please note using a variable to access a Tuple item DOES NOT work
const index = 3;
tpl[index]  ❌
```

:::


### Get multiple items/properties/chars by key

::: code-group


```ts [Array (items)]
arr[0, 2, 4] // ['A', 'C', 'E']

const keys = [0, 2, 4];
arr[...keys] // ['A', 'C', 'E']
```

```ts [Object (properties)]
obj['name', 'hobby'] // {name: 'Joe', hobby: 'Coding'}

const properties = ['name', 'friends'];
obj[...properties] // {name: 'Joe', friends: ['Moe', 'Larry', 'Curly']}
```

```ts [String (chars)]
str[0, 2, 4] // 'ACE'

const keys = [0, 2, 4];
str[...keys] // 'ACE'
```

```ts [Tuple (items)]
tpl[0, 2, 4] // <1, true, {name: 'Joe'}>

const keys = [0, 2, 4];
tpl[...keys] // <1, true, {name: 'Joe'}>
```

:::

### Get multiple items/properties/chars by Range

::: danger
Ranges are not supported on Objects since they are not numerically indexed
:::

::: code-group

```ts [Array (items)]
// valid way to access range from an array
arr[1 .. 3]; // ['B', 'C', 'D']  ✅

// using variables for range bounds
const lower = 1;
const upper = 3;
arr[lower .. upper] // ['B', 'C', 'D']  ✅

// invalid since the range is a variable
const myRange = 1 .. 3;
arr[myRange];  ❌
arr[myRange.lower .. myRange.upper]  ✅
```

```ts [String (chars)]
// valid way to access range from a string
str[1 .. 3]; // 'BCD'  ✅

// using variables for range bounds
const lower = 1;
const upper = 3;
str[lower .. upper] // 'BCD'  ✅

// invalid since the range is a variable
const myRange = 1 .. 3;
str[myRange];  ❌
str[myRange.lower .. myRange.upper]  ✅
```

```ts [Tuple (items)]
// valid way to access range from a tuple
tpl[1 .. 3] // <'abc', true, 3.14>

// using variables for range bounds
const lower = 1;
const upper = 3;
tpl[lower .. upper] // <'abc', true, 3.14>  ✅

// invalid since the range is a variable
const myRange = 1 .. 3;
tpl[myRange];  ❌
tpl[myRange.lower .. myRange.upper]  ✅
```
:::

::: warning
Range variables are not supported due to limitations of the parser. Instead of passing the range variable
directly, pass the lower and upper bounds individually.
:::

::: tip
Use variables for range bounds instead.
:::
