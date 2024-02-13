---
title: Advent of Code - preparing input data
tags: advent-of-code, programming, javascript
createdAt: 05/12/2022
---

# Advent of Code - preparing input data

When solving [Advent of Code](https://adventofcode.com/) puzzles, sometimes you will come across an input data, that
consist of two parts: configuration and instructions:

```txt
    [S] [C]         [Z]
[F] [J] [P]         [T]     [N]
[G] [H] [G] [Q]     [G]     [D]
[V] [V] [D] [G] [F] [D]     [V]
[R] [B] [F] [N] [N] [Q] [L] [S]
[J] [M] [M] [P] [H] [V] [B] [B] [D]
[L] [P] [H] [D] [L] [F] [D] [J] [L]
[D] [T] [V] [M] [J] [N] [F] [M] [G]
 1   2   3   4   5   6   7   8   9

move 3 from 4 to 6
move 1 from 5 to 8
move 3 from 7 to 3
move 4 from 5 to 7
move 1 from 7 to 8
move 3 from 9 to 4
```

While it's perfectly fine to write some kind of parser for it, very often I manually make the data easier to work with,
which can be super fast thanks to text editor features, like _multiline-cursor_, or _select all occurrences_.

For example, with this particular puzzle, I thought that it might be a good idea to store the first part of the input as
an object, so I manually typed the stack for each column, and then used _multiline-cursor_ to append `split` part of the
code. It took me only couple of seconds, definitely much faster than writing the whole parser for it.

```
let MAP = {
  1: 'DLJRVGF'.split(''),
  2: 'TPMBVHJS'.split(''),
  3: 'VHMFDGPC'.split(''),
  4: 'MDPNGQ'.split(''),
  5: 'JLHNF'.split(''),
  6: 'NFVQDGTZ'.split(''),
  7: 'FDBL'.split(''),
  8: 'MJBSVDN'.split(''),
  9: 'GLD'.split(''),
}
```

Second part, wouldn't require that much parsing, but still, instead of doing that, I removed the text by _selecting all
occurrences_, and left only important bits of information:

```txt
3 4 6
1 5 8
3 7 3
4 5 7
1 7 8
3 9 4
2 8 2
```

With that, I could iterate over list of steps pretty easily:

```js
let instructions = input
  .split('\n')
  .map(i => i.split(' ')
  .map(Number))

for (let [quantity, from, to] of instructions) {
   ...
}
```

---

[Advent of Code - 2022 Day 5](https://adventofcode.com/2022/day/5)
