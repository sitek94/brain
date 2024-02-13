---
title: Functions as First-Class Citizens in JavaScript
tags: javascript, programming
createdAt: 22/10/2022
---

# Functions as First-Class Citizens in JavaScript

Very often you can hear that in JavaScript "Functions are first-class citizens".

All it means is that it's possible to:

- Assign a function to a variable
- Pass a function to another function (callback)
- Return a function from another function

## Store functions in variables

```js
const sayHi = () => console.log('Hi!')

sayHi()
// Hi!
```

## Pass a function to another function (callback)

```js
function sayHi() {
  console.log('Hi!')
}

// Whatever function, you pass to it, it's going to
// call it twice
const repeatTwice = callback => {
  callback()
  callback()
}

repeatTwice(sayHi)
// Hi!
// Hi!
```

## Return a function from another function

```js
function getSayHi(name) {
  return function () {
    return `Hi, ${name}!`
  }
}

const sayHiToJohn = getSayHi('John')
const sayHiToMary = getSayHi('Mary')

sayHiToJohn()
// Hi, John!

sayHiToMary()
// Hi, Mary!
```

---

## References

- [MDN: First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Syntax Podcast: Syntactic Sugar, Declarative and First Class Citizens? What does that even mean?](https://syntax.fm/show/521/syntactic-sugar-declarative-and-first-class-citizens-what-does-that-even-mean)
