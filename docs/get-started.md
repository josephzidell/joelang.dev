# Get Started

## Quick Start

1. Install requirements
	::: details Requirements
	To compile a joelang program, you'll need

	| Requirement | Version | Verify via |
	| --- | --- | --- |
	| [Node.js & NPM](https://nodejs.org/en) | 18.x | `node -v` and `npm -v` |
	| [clang](https://cmake.org/download/#latest) | 3.26.4 | `clang --version` |
	| [llvm](https://releases.llvm.org/) | 14.0.6 | `llvm-config --version` or `llvm-config-14 --version` |
	| [gcc](https://gcc.gnu.org/install/) | 12.2.0 | `gcc --version` |

	::: code-group

	```bash [Ubuntu/Debian]
	curl -sL https://deb.nodesource.com/setup_18.x | sudo bash
	sudo apt install -y nodejs clang llvm-14 gcc
	```

	```bash [Mac (via Homebrew)]
	brew install node llvm@14 gcc
	```

	```ps1 [Windows (via PowerShell and Chocolatey)]
	# Install Chocolatey package manager
	Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

	choco install nodejs mingw
	choco install llvm --version=14.0.6
	```
	:::

2. - Download binary https://github.com/josephzidell/joelang/releases
     ::: tip
     When downloading a binary file, you can rename it to `joec` which is what code snippets in the documentation use.
     :::

   - Or [clone the repo](https://github.com/josephzidell/joelang), then `npm i` to install dependencies.
     ::: tip
     When cloning and running locally, `joec` in the code snippets can be replaced with `npm run joec` or `./.bin/joec`
     :::


### Usage

**Compile a `.joe` file**
```bash
joec main.joe # compile
./main # run
```

**Read from stdin**

Reading input from stdin will compile and run your code without saving a binary file to disk.

```bash
joec -i 'f main { print 42 }'
```

::: details Advanced Usage
Advanced usage is available behind flags.

```bash
# debug mode on
joec [filename].joe -d
joec -i '...' -d

# stop after lexing, do not parse; will output the Tokens
# (that's the lowercase L, not the number 1)
joec ... -l

# stop after parsing, do not analyze; will output the Parse Tree
joec ... -p

# stop after analysis; do not compile; will output the AST and Symbol Table
joec ... -a [--json]

# run the tests
npm test
```

::: tip
When running Joelang with `npm run joec`, remember to separate the flags with `--`.

```npm run joec [filename.joe] -- <flags>```
:::

## Included Examples

See the [examples](https://github.com/josephzidell/joelang/tree/main/examples) directory
