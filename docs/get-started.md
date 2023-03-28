# Get Started

## Quick Start

```bash
# compile a .joe file (ATM lexes, parses, and analyzes)
./joec [filename].joe # outputs 3 files ([filename].tokens, [filename].parse-tree, [filename].ast.json)

# play with the compiler, parser, or lexer
./joec -i '...' # run the compiler; will output the AST as objects
./joec -i '...' --json # run the compiler; will output the AST as JSON

./joec -i '...' -p # parse only, do not analyze; will output the Parse Tree

./joec -i '...' -l # (that's the lowercase L, not the number 1) lex only, do not parse; will console.table()'s the Tokens

# run the tests
npm test
```

## Included Examples

See the [examples](https://github.com/josephzidell/joelang/tree/main/examples) directory
