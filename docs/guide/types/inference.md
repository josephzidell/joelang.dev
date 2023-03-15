# Type Inference

Often the type of a variable can be inferred

```
const boolean = true; // bool
const file = ./foo.joe; // path
const num = 3; // number
const str = "hello"; // string
const ary = ['foo', 'bar']; // string[]
const range = 1 .. 10; // range
const tpl = <1, 'fun', 3.4, false>; // tuple <number, string, number, bool>
const object = {a: 1, b: 2}; // object {a: number, b: number}
const myMethod = f {...} // function type
```

If you instantiate a variable without assigning it immediately, a type is required:

```
let myName: string; // assign later, OK  ✅
let myName; // error since missing type and assigment  ❌
```
