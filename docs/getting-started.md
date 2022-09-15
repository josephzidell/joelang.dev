# Getting Started

## lexify
Convert your code into tokens

```bash
npm run --silent lexify -- 'your expression' # lexify an expression
npm run --silent lexify -- "$(cat path/to/file.joe)" # or a file
npm run --silent lexify -- '...' file.tokens # send the output to a file
```

## parse
Generate a parse tree of your code

```bash
npm run --silent parse -- 'your expression' # parse an expression
npm run --silent parse -- "$(cat path/to/file.joe)" # or a file
npm run --silent parse -- '...' file.parse-tree # send the output to a file
```

## transpile
Transpile your code into one of the supported languages:
- Go
- Typescript

```bash
# simple example
npm run --silent transpile -- ts 'print 5;' # -> console.log(5);

# using a file for Golang
npm run --silent transpile -- go "$(cat path/to/file.joe)" file.go # write Go code to a file

# using a file for Typescript
npm run --silent transpile -- ts "$(cat path/to/file.joe)" file.ts # write Typescript code to a file
```

## Included Examples
```bash
# run lexer example1
npm run --silent lexify -- "$(cat examples/example1/main.joe)" examples/example1/main.tokens
# run parser example1
npm run --silent parse -- "$(cat examples/example1/main.joe)" examples/example1/main.parse-tree
# transpile to Golang
npm run --silent transpile -- go "$(cat examples/example1/main.joe)" examples/example1/main.go
# transpile to Typescript
npm run --silent transpile -- ts "$(cat examples/example1/main.joe)" examples/example1/main.ts
```

## Run the tests
```bash
npm test
```
