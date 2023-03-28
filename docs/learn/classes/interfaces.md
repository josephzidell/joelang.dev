# Interfaces

An interface represents properties or methods that the class implementing must instantiate.
An interface can be used as a variable type, or by a class implementing it.

Interface names start with an uppercase letter, followed by any combination of letters, underscores, or digits. It must match this regular expression: `[A-Z][_a-zA-Z0-9]*`.

```
interface A {
	// no args or return types
	abstract f foo_1;

	// args but no return types
	abstract f foo_2 (arg: number);

	// return types but no args
	abstract f foo_3 -> bool;

	// args and return types
	abstract f foo_4 (arg: number) -> bool;
}
```

Then in your concrete class

```
class C implements A {
	f foo_1 {
		// must implement
	}

	f foo_2 (arg: number) {
		// must implement
	}

	f foo_3 -> bool {
		// must implement
	}

	f foo_4 (arg: number) -> bool {
		// must implement
	}
}
```
