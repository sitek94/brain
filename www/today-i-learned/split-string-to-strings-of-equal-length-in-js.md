---
title: Split string to strings of equal length in JavaScript
tags: javascript, programming
createdAt: 10/12/2022
---

# Split string to strings of equal length in JavaScript

**Solution**

```javascript
'abcdabcdabcdabcdabcd'.match(/.{1,4}/g)
// ['abcd', 'abcd', 'abcd', 'abcd', 'abcd']
```

Here's [original StackOverflow answer](https://stackoverflow.com/a/8359929/13504198).

**Context**

In today's [Advent of Code challenge](https://adventofcode.com/2022/day/10), I had to simulate drawing pixels on 40x6
CRT screen. First I computed lit and dark pixels, and got the following string, which I needed to map on 40x6 screen.

```js
const screen =
  '##..##..##..##..##..##..##..##..##..##..###...###...###...###...###...###...###.####....####....####....####....####....#####.....#####.....#####.....#####.....######......######......######......###########.......#######.......#######.....'

const formattedScreen = screen.match(/.{1,40}/g).join('\n')
```

After logging that in the console, I got expected output which contained 8 capital letters - the answer to the
challenge: `PGHFGLUG`

```
###...##..#..#.####..##..#....#..#..##..
#..#.#..#.#..#.#....#..#.#....#..#.#..#.
#..#.#....####.###..#....#....#..#.#....
###..#.##.#..#.#....#.##.#....#..#.#.##.
#....#..#.#..#.#....#..#.#....#..#.#..#.
#.....###.#..#.#.....###.####..##...###.
```
