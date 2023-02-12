# Special Functions

## `?`

Function names that end with a `?` indicate it returns a bool. However, the inverse is not necessary. A function that returns a bool does not require the `?`.

```
// must return bool
f isDone? -> bool {}
```

## `!`

Function names that end with a `!` indicate it throws an error. Note this works in a strict way:
- If it throws an error, the name must include a `!`
- If the name includes a `!`, it must throw an error in at least one situation.

```
// valid
f danger! {  ✅
	throw Error if something bad happens;
}

// invalid because it does not throw an error
f danger! -> number {  ❌
	return 4;
}

// invalid because the name does not end with a `!`
f danger {  ❌
	throw Error if something bad happens;
}
```

## `?!`

If a function returns a bool **and** throws an error, the `?` precedes the `!`

```
// valid
f isDone?! -> bool {  ✅
	throw Error if something bad happens;

	return true;
}

// invalid
f isDone!? -> bool {  ❌
	throw Error if something bad happens;

	return true;
}
```
