# Mongoose Notes

some notes on mongoose features to learn more \
before building the next stages of the Riveto app.

## schema

```ts
const schema = new mongoose.schema({
tags: [string],
comment: [{
    // to define a type which its type is going to be
    // id of another schema object
    user: mongoose.SchemaTypes.ObjectId,
    createdAt: {
        type: Date,
        // this should be a function to be alive
        // if not, it'll be static each time model gets generated:
        default: () => Date.now(),
        immutable: true     // unchangeable
    }
    anyString: {
        type: String,
        minLength: 0
        maxLEngth: 0
    }
    anyNumber: {
        type: Number,
        min: 0,
        max: 0
    }
}]
})
```

## Errors

to use errors we should wrap the code that we call the model each tome in try/catch

```ts
try {
  await db();
  await Model.findById({});
} catch (error) {
  console.log(error.message);
}
```

## Query

we have custome query with `where()` which has many options:\
more on this: https://mongoosejs.com/docs/api/query.html#Query.prototype.where()

```ts
// instead of writing:
User.find({ age: { $gte: 21, $lte: 65 } });

// we can instead write:
User.where("age").gte(21).lte(65);

// passing query conditions is permitted
User.find().where({ name: "vonderful" });

// chaining
User.where("age")
  .gte(21)
  .lte(65)
  .where("name", /^vonderful/i)
  .where("friends")
  .slice(10)
  .exec();
```

### select

it is funny because after **query** we can specify what to return:

```ts
// 'include' a and b, exclude other fields
query.select("a b");
// Equivalent syntaxes:
query.select(["a", "b"]);
query.select({ a: 1, b: 1 });

// 'exclude' c and d, include other fields
query.select("-c -d");
```

## Join

we can join models throgh schemas:

https://mongoosejs.com/docs/populate.html
