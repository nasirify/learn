# Static Files

we can not have any access to the files on server for security
if we want to have access to styles or images we have to use
static middleware of express:

```js
app.use(express.static("public"));
```

notice:

1. public folder must be in the root directory
2. everything in public is considered to be in the root directory. e.g. `/public/styles/style.css` should be addressed as `/styles/style.css`
 