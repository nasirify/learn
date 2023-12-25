# http module

we can create a server with it and listen to the incoming requests :

```js
import http from "http";
// create a server
const server = http.createServer((req, res) => {
  console.log("A Request Made");
});

// expose a server
const PORT = 3000;
const IP = "127.0.0.1" || "localhost";
server.listen(PORT, IP, () => {
  console.log(`Server running on ${PORT}`);
});
```

## Request object

in creating server above we have a `req` argument. this object has all the incoming request information:

```js
req.url; // returns the segments not the whole url
req.method; // like POST, GET, PATCH etc.
```

## Response object

we can als use `res`

```js
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Any Text to display in the use browser");
  res.end();
});
```

## HTML Response

we can also return html to the user:

```js
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<head><title>Page Title</title></head>");
  res.write(`<h1> hello World </html> <p> this is a simple html response </p>`);
  res.write(`<a href="https://google.com">Go to google </a>`);

  res.end();
});
```

### Send HTML as response

```js
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./index.html", (err, data) => {
    if (err) console.log(err);
    if (!err) {
      res.write(data);
      res.end();
    }
  });
});
```

_we can also only use `res.end(data)`_
