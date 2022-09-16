# Path

joelang has first-class support for paths.

Paths begin with either `@/` or `./`

## Path relative to the project root

Paths beginning with `@/` are relative to the project root.

## Path relative to the current file

Paths beginning with `./` are relative to the current file.

```
./path/relative/to/current/file.joe
```

## Directory paths

Directory paths are also supported and must end with a trailing slash

```
const myDir = ./myDir/;
```

## Example

Given this sample file structure, we'll see what is allowed and what is not
```
my-app/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ robots.txt
├─ src/
│  ├─ index.joe
│  ├─ otherFile.joe
```

```
// src/index.joe

import foo from ./otherFile.joe; // look ma, no quotes

const robot = @/public/robots.txt; // valid path from the project root

const publicDir = @/public/;
```

Here are some invalid scenarios

```
// src/index.joe

const robot = ../public/robots.txt;

const kernelDir = /kernel/; // haha ... nope

const whoops = ./aThirdFile.joe // file it doesn't exist
```

## Windows / cross-OS

Windows uses back-slashes `\`, while Unix systems use forward slashes `/`. joelang standardizes paths to be cross-OS by always using forward slashes, and it'll work even on Windows systems.

## What paths are not supported

| Type | Reason |
| --- | --- |
| Absolute paths in the file system | Paths outside of the project root are not supported as a security precaution. If you need a file, it should live within the project root |
| `../file.joe` | Paths that "go up a level" are difficult to maintain as files may need to be moved around. And yes, we do support relative paths within the same directory, as those are less likely to be separated |
| `.` | The singular period as used for the current directory will be interpreted as something else by the lexer. You can use `@/my/dir/` for that, since you know which dir this file is in |
