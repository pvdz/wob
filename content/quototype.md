---
title: Quototype
categories:
    - syntax
tags:
    - object
---

# Works or B0rks?

For each case, is it valid JS or not?

```js
let obj = {
    prototype: A,
};
```

```js
let obj = {
    prototype: A,
    prototype: A,
};
```

```js
let obj = {
    prototype: A,
    prototype: B,
};
```

```js
let obj = {
    "prototype": A,
    "prototype": B,
};
```

```js
let obj = {
    prototype: A,
    "prototype": B,
};
```

```js
let obj = {
    prototype: A,
    ["prototype"]: B,
};
```
