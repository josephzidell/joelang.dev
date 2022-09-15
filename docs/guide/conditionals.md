# Conditionals

If statements do not use parens and can be specified before or after the statement.

## Before

### Classic scenarios
```
if someCondition {
	do();
}

if someCondition {
	do();
} else if otherCondition {
	other();
} else {
	lastResort();
}
```

# After
An if conditional may be specified _after_ a function call.

```
do() if someCondition;
```

## Use in arrays and POJOs

```
// this can be used in arrays
[1, 2 if someCondition, 3] // array will either be [1, 2, 3] or [1, 3]

// and in POJOs
{a: 1, b: 2 if condition, c: 3} // `b` will not be defined if condition is false
// if you want the property to always be there, use a ternary
{a: 1, b: condition ? 2 : 0, c: 3} // `b` will definitely be defined
```
