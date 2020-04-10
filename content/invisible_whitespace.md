---
title: Invisible Whitespace
categories:
    - quiz
tags:
    - string, newline
---

# What o'Bout?

> How do you put two newline characters in a string with only one line continuation?

Normally, strings in JS are not allowed to have a newline. You must escape them, for example:

```js
str = "\n";
```

However, there is a concept called "line continuation", where you can escape the new line character to introduce a visual newline in the code without adding it to the actual string value:

```js
str = "ab\
cd";
console.log(str === "abcd") // true
```

So my question is: how can you legitimately put _two_ newline characters in a string using only one such line-continuation?

There are actually two answers to this question.
