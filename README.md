# socuments

Make some wacky sci-fi themed sample documents, batteries included!

![carbon (2)](https://user-images.githubusercontent.com/15038724/90974739-a9c19780-e4e2-11ea-8355-0fabaadfe113.png)

# Usage

```js
const socuments = require("socuments");
const { writeFileSync } = require("fs");

const docs = socuments(100);

writeFileSync("./datadump.json", JSON.stringify(docs));

console.log(docs);
```

`socuments ([ count, template])`:

- `count`: how many ya' want cheif?
- `template`: a JSON template to use instead of the default.

# Templates

Something like this.

```js
{
    foo: { letters: 10 },
    bar: { letter: true },
    baz: { number: 10 },
    qux: { uuid: 24 },
    quux: { email: 12 },
    corge: { password: 24},
    grault: { lorem: 126 },
    garply: { date: true },
    waldo: { boolean: 1 },
    fred: { bloodtype: true },
    plugh: { name: true }
}
```

For everything that supports integer values, the value represents the length. Setting `letter` to `true` capitalizes it. `name` and `bloodtype` have passthrough, so if you want presets, there you go!

Want more cool types? Open a PR!
