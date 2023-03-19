# Importing

You can import another .joe file, either using an absolute path from the project root, or a path relative to your file. Please see [Types/Path](types/path.md).

If you specify a file name, that file will be imported. If you specify a directory, a `main.joe` file in that directory will be imported.

```
// specify a file
import someFile from @/some/file.joe;

// import main.joe from this directory
import someMainJoeFile from ./some/dir/;
```
