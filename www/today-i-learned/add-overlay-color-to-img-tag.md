---
title: Add overlay color to <img />
tags: css, web-development, frontend
createdAt: 26/11/2022
---

# Add overlay color to <img />

If you want to change the color of a remote image, that you display like this:

```html
<img alt="freeCodeCamp logo" src="https://unpkg.com/simple-icons@7.20.0/icons/freecodecamp.svg" />
```

You can use [CSS filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) property. It offers a variety of
different color functions, which you can use to change the color of your image, like `contrast`, `hue-rotate` or
`saturate`.

Of course, trying to find the correct color manually would be extremely hard. Fortunately, some smart people created
tools like [this one](https://isotropic.co/tool/hex-color-to-css-filter/), where you enter a target HEX color and it
gives you back a computed filter property value.

![Screenshot from 2022-11-23 21-00-10.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669233638115/7j7E98r0b.png
align="left")

All you have to do now, is add it in your CSS:

```css
img {
  filter: invert(2%) sepia(82%) saturate(4192%) hue-rotate(242deg) brightness(102%) contrast(98%);
}
```

---

- [Codepen example](https://codepen.io/sitek94/pen/GRGxdXN)
- [Hex color to CSS filter](https://isotropic.co/tool/hex-color-to-css-filter/)
- [Deep dive into the topic on StackOverflow](https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991)
