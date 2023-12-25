# Stream files

large files will be split into multiple parts (each part is a buffer) and will be sent to the browser this way\
_so we don't need to **download all** of to be able to use it like youtube_

we can use stream in both reading a file or writing a file:

- write stream
- read stream
- pipe

## Read and Write Stream

```js
import fs from "fs";

// options are optional
const options = {
  encoding: "utf8",
};

const readStream = fs.createReadStream(FilePath, options);
const writeStream = fs.createWriteStream(FilePath, options);

// data is a event listener
readStream.on("data", (buffer) => {
  console.js(buffer);

  // also write it to file specified in createWriteStream
  writeStream.write(buffer);
});
```

## pipe in nodejs

In Node.js, piping is a powerful mechanism for connecting two streams together, allowing data to flow seamlessly from one stream to the other. It's analogous to connecting two pipes in real life, where water flows from one pipe to the other. In Node.js, streams are objects that represent data flow, and the pipe() method connects the output of one stream to the input of another.

```js
// we can connect the above streams like this:
readStream.pipe(writeStream);
```
