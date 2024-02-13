---
title: What is lexical scoping?
tags: scheme, programming, computer-science
createdAt: 13/11/2022
---

# What is lexical scoping?

Here's how we can define a simple `sqrt` function in Scheme:

```scheme
(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (improve guess x)
  (average guess (/ x guess)))
```

The problem with this approach is that the users will be interested only in `sqrt` function, so other functions are
polluting the namespace. We can improve that by defining them within `sqrt`:

```scheme
(define (sqrt x)
  (define (good-enough? guess x)
    (< (abs (- (square guess) x)) 0.001))
  (define (improve guess x)
    (average guess (/ x guess)))
  (define (sqrt-iter guess x)
    (if (good-enough? guess x)
        guess
        (sqrt-iter (improve guess x) x)))
  (sqrt-iter 1.0 x))
```

Since x is bound in the definition of `sqrt`, the other procedures, which are defined internally, are in the scope of x.
Thus, it is not necessary to pass x explicitly to each of these procedures.

```scheme
(define (sqrt x)
  (define (good-enough? guess)
    (< (abs (- (square guess) x)) 0.001))
  (define (improve guess)
    (average guess (/ x guess)))
  (define (sqrt-iter guess)
    (if (good-enough? guess)
        guess
        (sqrt-iter (improve guess))))
  (sqrt-iter 1.0))
```

This is possible thanks to **lexical scoping**.

> **Lexical scoping** dictates that free variables in a procedure are taken to refer to bindings made by enclosing
> procedure definitions; that is, they are looked up in the environment in which the procedure was defined.

Simply put, **every inner function can access outer variables**.

## References

The example is taken from
[Internal definitions and block structure](https://sarabander.github.io/sicp/html/1_002e1.xhtml#Internal-definitions-and-block-structure)
chapter of Structure and Interpretation of Computer Programs book.
