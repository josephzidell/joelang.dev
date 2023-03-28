# Abstract Classes

An abstract class is a special type of class in which you can define abstract methods.

An abstract class can be either extended or implemented.

The reason you may want to use abstract methods/classes is to ensure all concrete child classes implement those methods. It represents methods that the concrete class must instantiate.

> :warning: Abstract methods are not allowed in concrete classes.
>
> The reason for this is that concrete classes can be instantiated directly, and then there won't be an implementation for that method.

## Declaration

```
abstract class A {
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
class IAmExtending extends A {
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

class IAmImplementing implements A {
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

## Instantiating

> :warning: Abstract classes cannot be instantiated.

```
abstract class A { ... }
class B extends A { ... }
class C implements A { ... }

A.create();  ❌
B.create();  ✅
C.create();  ✅
```
