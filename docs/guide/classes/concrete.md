# Classes

Class names start with an uppercase letter, followed by any combination of letters, underscores, or digits. It must match this regular expression: `[A-Z][_a-zA-Z0-9]*`.

A **concrete class** is a class that does not have any abstract properties or methods, and can be instantiated.

## Declaration

```
class Foo {} // simplest possible
```

In the class you can have properties and/or methods.

```
class Universe
	const meaningOfLife = 42;

	f why -> Reason {
		// ...
	}
}
```

## Extending classes

A class may extend one or more parent classes, which can be any mix of concrete or abstract.

```
class Foo extends Bar {}
class Foo extends Bar, Baz {}
```

## Implementing abstract classes or interfaces

A class may implement one or more abstract classes or interfaces.

```
class Foo implements AbstractClass {}
class Foo implements AbstractClass, MyInterface {}
```

## Potential conflicts

With multiple inheritance comes the possibility of method or property naming conflicts. Here's an example

```
class A {
	f foo {
		print "I am from class A";
	}
}

class B {
	f foo {
		print "I am from class B";
	}
}

class C extends A, B {
	// ...
}

const c = new C();
c.foo(); // <-- which foo() is called?
```

### Conflict Resolution

The resolution rules involve these steps:
1. Automatic resolution: The class extended first takes precendence.
	```
	// scene: classes A and B have foo()
	class C extends A, B {}
	new C().foo(); // will call A's since it was extended before B

	class D extends B, A {}
	new D().foo(); // will call B's since it was extended before A
	```
2. Manual Resolution: Specify which class's method should be used
	```
	// scene: classes A and B have foo()
	class C extends A, B {
		f foo () {
			return this.parent<B>.foo(); // <-- Specify to use B.foo
		}
	}

	const c = new C();
	c.foo(); // <-- will call the method you created, thereby resolving
	```
