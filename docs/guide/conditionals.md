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

## After
An if conditional may be specified _after_ a function call or an item in an array

### Use in arrays

```
[1, 2 if someCondition, 3] // array will either be [1, 2, 3] or [1, 3]
```

### Use in function calls

```
do() if condition;
```

### Exceptions

If conditionals after are not supported for returns, as this confuses the reader. Early returns can be done with a traditional `if`

```
f foo (num: number) {
	if num < 0 {
		return;
	}

	// continue on ...
}
```

## Ternary

A ternary is a short-form of if/else with this syntax: `condition ? firstChoice : secondChoice`

A ternary returns a value, therefore both choices must be the same type.

### Nesting ternaries

In the interest of readability, nested ternaries are not supported
