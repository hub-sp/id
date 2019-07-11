# Id

This is a package that can give you random, short bits of text. You can also get only a small bit of it with the `length` parameter!

```sh
npm install @yaas/id
```

In `app.js`
```js
const createID = require('@yaas/id');

const id_string = createID(4);

console.log(id_string);
// => qpe0
```
If you choose a length longer than the original string, it will automatically return the correct length!