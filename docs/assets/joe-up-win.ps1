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
