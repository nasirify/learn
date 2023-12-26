# ExpressJS

a nodejs framework :)

```js
import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT);

// router and http methods
app.get(path, arrowFunction);
app.post(path, arrowFunction);
app.patch(path, arrowFunction);

//send data
app.get("/about", (req, res) => {
  res.send("About Page");
});

//send file
app.get("/about", (req, res) => {
  /*
    it needs to change the root
    it is necessary! 
    */
  res.sendFile("./index.html", { root: _dirname });
});

//redirect
app.get("/about", (req, res) => {
  res.redirect("/about-us");
});

//404 page
app.use((req, res) => {
  /*
    it must be at the end of the codes,
    it will be default for anything that
    has no route. so everything is 404 except the ones
    that are specified in the previous code.
    */
  res.sendFile("./404.html", { root: _dirname });
});
```
