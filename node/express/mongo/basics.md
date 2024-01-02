# MongoDB

we use `mongoos` to connect to mongo. there is just one new thing that i've just learnt:
```js
mongoose.Schema({
    /* schema */
}, {
    /* add createdAt and updatedAt automatically */
   typestamps 
})
```