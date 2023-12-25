# http status codes

- **Informational responses** (100 – 199)
- **Successful responses** (200 – 299)
- **Redirection messages** (300 – 399)
- **Client error responses** (400 – 499)
- **Server error responses** (500 – 599)

we can add status code to the response like this:

```js
res.statusCode = 404;
```

## redirects

it is important to know how to deal with redirects:

```js
res.statusCode = 301;
res.setHeader("Location", "/about");
res.end();
```
