---
title: Scope Chain in JavaScript
description:
  Explains how JavaScript resolves variables through its lexical scope chain, demonstrating the importance of code
  structure.
tags: javascript, scope-chain, lexical-scope, variables
createdAt: 22/08/2020
---

# Scope Chain in JavaScript

## How JavaScript Resolves Variables Through Its Lexical Scope Chain

In JavaScript, the resolution of variables is determined by the structure of the code on the page, which demonstrates
the lexical nature of the scope chain. This means that the physical placement of functions and variables in your code
directly influences variable accessibility.

Consider the following example:

```jsx
function foo() {
  console.log(myVar)
}

function moo() {
  var myVar = 1
  foo()
}
// Error: myVar is undefined
```

In this case, although `foo()` is called after `myVar` is declared within `moo()`, `foo()` cannot access `myVar`. This
occurs because the scope chain, which determines the accessibility of variables, is defined lexically. In simpler terms,
the order in which the code is written is crucial.

To further illustrate:

```jsx
function moo() {
  var myVar = 1 // 2. So it's looking in the outer scope, and here it is

  function foo() {
    // 1. foo looks for myVar in its own scope, doesn't find it
    console.log(myVar)
  }

  foo()
}
// 3. If myVar wasn't inside moo's scope, foo would continue to look for it in the global scope
```

In this modified example, `foo()` is nested within `moo()`, which changes the scope chain. When `foo()` is executed, it
first looks for `myVar` within its own scope. Not finding it there, it looks in the outer scope, where `myVar` is
declared. This process demonstrates the lexical scope chain: `foo()` can access `myVar` because `myVar` is within its
accessible scope, determined by the lexical (or written) structure of the code.

Understanding the lexical nature of the scope chain is crucial for effective JavaScript programming, as it influences
how variables are resolved and accessed across different parts of your code.
