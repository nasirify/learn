# Nodejs routing

when creating a server with `http` we have access to the page url's segments with `req.url`. we can use it to make a simple routing system

```js
import http from "http";

http.createServer((req, res) => {
  const url = req.url;
  let path = "./viewFolder/";

  switch (path) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) console.warn(error);
    if (!err) res.end(data);
  });
});
```

notice that `res.end(data)` is the equivalent of

```js
res.write(data);
res.end();
```
