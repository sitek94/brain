---
title: Hosting in JavaScript
createdAt: 20/08/2020
---

# Hoisting in JavaScript

> [!NOTE] 🇵🇱 &nbsp;hoisting — podnoszenie, wciąganie, dźwiganie

## Definition

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.

## Variables

- `var`: Declarations are hoisted, but not the assignments. If you use a var variable before it's defined, it'll be
  undefined.

```jsx
'use strict'
console.log(a)
var a = 1 // undefined

// Because this is what's happening under the hood:
var a
console.log(a)
a = 1
```

- `let` and `const`: They're hoisted too, but accessing them before the declaration throws a ReferenceError due to the
  Temporal Dead Zone.

## Functions

- **Function Declarations**: Fully hoisted, so you can call them before they're defined.

```jsx
'use strict'
foo() // Hello

function foo() {
  console.log('Hello')
}

// Under the hood:
function foo() {
  console.log('Hello')
}
foo()
```

- **Function Expressions**: The variable name is hoisted, but not the function assignment. Calling it before definition
  throws an error.

```jsx
'use strict'
foo() // foo is not a function

var foo = function () {
  console.log('Hello')
}

//Because under the hood:
var foo
foo()
foo = function () {
  console.log('Hello')
}
```
