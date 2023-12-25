# file system module

the `fs` is a built-in module for working with files

_\* everywhere in these codes, files are buffer files_

```js
import fs from "fs";

/*
    readFile is Async
    function returns the 'target file' and 'error'
*/
fs.readFile(filePath, arrowFunction);
/*
    it will create a file / also async
    - if already exist it will TOTALLY REWRITE IT!
    - append add the data to the last file and does not
      remove the previous data
*/
fs.writeFile(filePath, data, arrowFunction);
fs.appendFile(filePath, data, arrowFunction);

// Delete a file
fs.unlink(filePath, arrowFunction);

/*
    create and remove directory
*/
fs.mkdir(directoryPath, arrowFunction);
fs.rmdir(directoryPath, arrowFunction);
```

the arrow function runs after the async process of above methods ends:

```js
(error, etc) => {
  console.log(error);
};
```
