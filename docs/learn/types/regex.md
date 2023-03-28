# Regex (Regular Expression)

Regular expressions are delineated with two forward slashes, optionally followed directly with supported flags

Here are some examples

```
/[a-z]/
/[a-zA-Z0-9]/gi
```

## Supported Flags

A flag changes the default searching behavior of a regular expression. It makes a regex search in a different way.

A flag is denoted using a single lowercase alphabetic character.

joelang supports these flags, each serving a different purpose.

| Flag | Name | Purpose |
| --- | --- | --- |
| `g` | Global | Finds all occurences |
| `i` | Ignore casing | Makes the regular expression ignore case |
| `m` | Multiline | Makes the boundary characters `^` and `$` match the beginning and end of every line instead of the beginning and end of the string |
| `s` | Dot all | Makes the wild character `.` match newlines as well |
