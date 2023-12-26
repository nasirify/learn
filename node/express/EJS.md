# Embedded JavaScript templating

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

we install it with `npm i ejs` and then we set it into our project using `se()` method:

```js
app.set("view engine", "ejs");
```

all of ejs files **MUST BE** in `/views` folder!

## Send EJS to client

we can not use `app.sendFile()` method. we should use another method:

```js
app.get("/", (req, res) => {
  /*
    1. the base path is /views/
    2. we do not need the mimType .ejs
    */
  res.render("index");
});
```

we can chain methods: `res.status(200).render("index")`

## pass Dynamic Data
