# Generic Types

In joelang, generic types allow you to create classes, enums, functions, and variables that can work with multiple types of data, providing flexibility and reusability in your code. You can define generic types using the following syntax:

## Classes

To define a generic class, use the class keyword followed by the name of the class, followed by the generic type parameter in triangle brackets <| |>, and then define the class body in curly braces { }. For example:

```joelang
class Foo <| T |> {
    // class body
}
```

In the example above, Foo is a generic class with a type parameter T. The type parameter T can be any valid type in joelang and can be used as a placeholder for a specific type that will be provided when creating an instance of the class.

You can use the generic type parameter T in the class body to define properties, methods, and other members that can work with the generic type. For example:

```joelang
class Foo <| T |> {
    const value: T;

    pub static create(T value) -> Foo {
        this.value = value;
    }

    pub getValue() -> T {
        return value;
    }

    pub setValue(T value) {
        this.value = value;
    }
}
```

In the example above, the Foo class has a generic type parameter T which is used to define a private property value of type T. The constructor and methods of the class can also work with the generic type T as a placeholder for a specific type that will be provided when creating an instance of the class.

## Enums
To define a generic enum, use the `enum` keyword followed by the name of the enumeration, followed by the generic type parameters in triangle brackets <| |>, followed by the enumerated items in curly braces `{ }`. For example:

```joelang
enum Maybe <| T |> {
	Has(T),
	HasNot,
}
```

In the example above, `Maybe` is an enum with a generic type parameter T. The type parameter T can be any valid type in joelang and can be used as a placeholder for a specific type that will be provided when using the enum.

## Functions

To define a generic function, use the `f` keyword followed by the name of the function, followed by the generic type parameter in triangle brackets <| |>, followed by the function parameters and return type, and finally, define the function body in curly braces { }.

You can use the generic type parameter T in the function parameters, return type, and function body to perform operations that are generic and can work with different types of data. For example:

```joelang
f wrapInArray <| T |>(arg1: T) -> T[] {
    return [arg1]; // wrap the argument in an array
}
```

In the example above, the wrapInArray function takes an argument of type T and returns an array of type T[]. The generic type parameter T is used as a placeholder for the actual type of the argument and the return value, which will be provided when calling the function.

## Conclusion

Generic types in joelang provide flexibility and reusability in your code by allowing you to create classes and functions that can work with different types of data. You can define generic types using the class and f keywords, followed by the generic type parameter in triangle brackets <| |>, and then use the generic type parameter as a placeholder for a specific type that will be provided when creating instances of classes or calling functions. Happy coding!

### Next Step: Explore more advanced topics on generic types, such as type constraints, generic interfaces, and advanced use cases.

TODO: document constraints and default, eg `<| E: Error = Error |>`
