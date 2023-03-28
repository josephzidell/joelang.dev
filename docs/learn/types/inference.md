# Type Inference

Often the type of a variable can be inferred

```
const boolean = true; // bool
const file = ./foo.joe; // path
const num = 3; // int8, int16, int32, int64, uint8, uint16, uint32, or uint64
const str = "hello"; // string
const ary = ['foo', 'bar']; // array<string>
const range = 1 .. 10; // range. In joelang, ranges are always inclusive on both sides
const tpl = <1, 'fun', 3.4, false>; // tuple
const object = {a: 1, b: 2}; // object (POJO - Plain Ol' Joe Object)
const myMethod = f {...} // function type (as opposed to a regular function `f myMethod {}`)
```

If you instantiate a variable without assigning it immediately, a type is required:

```
let myName: string; // assign later, OK  ✅
let myName; // error since missing type and assigment  ❌
```
