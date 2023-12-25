# Basics of NodeJS

nodejs js a runtime for js outside of browsers based on V8 render engine of chrome. nodejs do not has access to **Document global object** or window object. They exist only on the browsers like chrome. lets take the first steps and get ready to learn node:

- **install node** from its website
- **install and IDE** like VSCode or etc.

_more about window api: https://developer.mozilla.org/en-US/docs/Web/API/Window_

## nodejs Global Object

as browser has DOM (Document Object Model) which has access to all elements _(also referred to as DOM node (node meaning DOM elements and not Nodejs))_ we also have Nodejs Global object. It has different properties and methods such as:

- **require()** _method to require modules_
- **exports()** _shorthand of module.exports in js_
- **\_\_dirname** _Current directory_
- **\_\_filename** _current file's name_

## Modules

we can split our app into multiple parts. each parts are called modules in nodejs. we have two type of modules:

- **built-in modules** _nodejs prebuilt modules_
- **custom modules** _modules that we create_

we can create a file and **export** what we want in it as 'module' and **import** it into another module

```js
/* first-file.js */
const hello = "world!";

module.exports = {
  hello,
};

/* second-file.js */
const { hello } = require("./first-file");

console.log(hello); // result will be 'World!'
```

we have **built-in** modules like these:

```js
const os = require("os"); // operation system module
const fs = require("fs"); // file system module
```

## CJS vs ESM

we these are different types of js modules:

### CommonJS Modules (CJS)

```js
const { someImport } = require("some-module");

module.exports = {
  someExport: {},
};
```

CJS is older. It is purely **synchronous** and non-standard and browsers can not run it.

### EcmaScript Modules (ESM)

```js
import { someImport } from "some-module";

const { someOtherImport } = await import("some-other-module");

export const someExport = {};
```

ECM is the **standard way of doing modules** and is supported in browsers and server side run times like deno and nodejs. also allow asynchronous loading and exports without globals.
