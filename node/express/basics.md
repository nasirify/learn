# ExpressJS

a nodejs framework :)

```js
import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT);

// a simple response to root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

