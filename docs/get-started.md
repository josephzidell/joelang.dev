# Get Started

## Quick Start

1. Install requirements
	::: details Requirements
	To compile a joelang program, you'll need

	| Requirement | Version | Verify via |
	| --- | --- | --- |
	| [Node.js & NPM](https://nodejs.org/en) | 18.x | `node -v` and `npm -v` |
	| [llvm](https://releases.llvm.org/) | 15.0.7 | `llc --version` |
	:::

	::: code-group

	```bash [Ubuntu/Debian]
	#!/bin/bash

	# Update package lists
	echo "Updating package lists..."
	sudo apt-get update

	# Install Node.js and npm
	echo "Installing Node.js and npm..."
	curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
	sudo apt-get install -y nodejs

	# Install LLVM
	echo "Installing LLVM..."
	sudo apt-get install -y llvm

	# Verify installations
	echo "Verifying installations..."
	node -v
	npm -v
	llvm-config --version

	echo "All done!"
	```

	```bash [Mac (via Homebrew)]
	#!/bin/bash

	# Check for Homebrew, install if we don't have it
	if test ! $(which brew); then
		echo "Installing homebrew..."
		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	fi

	# Update Homebrew recipes
	echo "Updating Homebrew recipes..."
	brew update

	# Install Node.js and npm
	echo "Installing Node.js and npm..."
	brew install node

	# Install LLVM
	echo "Installing LLVM..."
	brew install llvm

	# Verify installations
	echo "Verifying installations..."
	node -v
	npm -v
	llvm-config --version

	echo "All done!"
	```

	```ps1 [Windows (via PowerShell and Chocolatey)]
	# Install Chocolatey package manager
	Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

	# Install Node.js and npm
	choco install nodejs

	# Install LLVM
	choco install llvm

	# Verify installations
	node -v
	npm -v
	llvm-config --version

	Write-Output "All done!"
	```
	:::

2. Download binary

	https://github.com/josephzidell/joelang/releases

### Usage

```bash
joec [filename].joe # compile and run a .joe file
joec -i 'f main { print 42 }' # read from stdin
```

::: details Advanced Usage

```bash
# debug
joec [filename].joe -d
joec -i '...' -d

# lex only, do not parse; will output the Tokens
# (that's the lowercase L, not the number 1)
joec ... -l

# lex and parse, do not analyze; will output the Parse Tree
joec ... -p

# lex, parse, and analyze; do not compile; will output the AST and Symbol Table
joec ... -a [--json]

# run the tests
npm test
```

:::

## Included Examples

See the [examples](https://github.com/josephzidell/joelang/tree/main/examples) directory
