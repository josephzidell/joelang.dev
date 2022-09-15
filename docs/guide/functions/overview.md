# Functions

Functions are defined with the `f` keyword, followed by the function name unless it's being assigned to a variable, optionally arguments, optionally return types, and then curly braces for the body.

Function names must match this regular expression: `[_a-zA-Z][_a-zA-Z0-9]*\??!?`

```
// no args, no return
f myName {};

// args
f myName (arg1: number, arg2: MyType, arg3 = true) {};

// single return
f myName -> string {};

// multiple return
f myName -> string, number, etc. {};

// assigning a function to a variable (no name, and notice the semicolon)
const myName = f {...}; // usual things apply: args, return types, etc.
```
