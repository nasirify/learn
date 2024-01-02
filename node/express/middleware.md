# Middleware on Express

middlewares sits between requests. we create middlewares with `app.use()` we use middleware for:

- authorization
- route protection
- 404 response
- access to req/res data

middlewares ends when a response get sent

```js
app.use((req, res, next) => {
  console.log(`Request Host: ${req.hostname} and its method: ${req.method}`);
  next();
});
```

## Important Functionality

as said above, if any middleware returns any response the rest of the middlewares **will NOT initiate**. Important understanding is that `app.METHOD()` like `app.get()` or `app.post()` are middlewares as well.

## built in middlewares

there are middleware packages to install: https://expressjs.com/en/resources/middleware.html