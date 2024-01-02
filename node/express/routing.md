# Routing

we do routing with middlewares. 

```js
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


## Dynamic routing

we can access the the URL as params with this simple method: `req.params.id` of course after we used it in the route as `/blogs/:id`

```js
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  res.send(`id`);
});
```

## Express router technique

https://www.youtube.com/watch?v=C6IHEo5Rtu8&list=PLi3_QQ40Q-swHQfDeqpyYJt53t6HvEkm1&index=48&pp=iAQB