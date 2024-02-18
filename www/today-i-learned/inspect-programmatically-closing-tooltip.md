---
title: Inspect a programmatically closing tooltip
tags: devtools, debugging, javascript
createdAt: 16/11/2022
---

# Inspect a programmatically closing tooltip

Today, I've had hard time inspecting a disappearing tooltip.

Here's [a contrived example to visualize my problem](https://sitek94.github.io/devtools-break-on-subtree-modifications).

The tooltip disappears on `blur`, `mouseup` and `mouseleave` event, so it's not possible to open it, and then check it
out in the DevTools.

Fortunately, I've found this [SO thread with a solution](https://stackoverflow.com/a/34095731).

All you have to do is:

1. Find a container element of your tooltip
2. Add a breakpoint, when the content of this element is modified, as shown on the screenshot below.

![Screenshot from 2022-11-16 19-45-21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668624559126/Y-RkqsiLZ.png)

Now, after you trigger the tooltip to be shown, the execution of the code responsible for inserting the element into the
DOM will stop.

![Screenshot from 2022-11-16 19-53-25.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668625427658/7iDVbj_E7.png)

Click `F10` to let this part of the code run.

![Screenshot from 2022-11-16 19-58-55.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668625191498/Lra8vdRBT.png)

And now, when you go back to _Elements_ tab, you'll see that the tooltip was inserted into the DOM, and you can inspect
it! 🎉

![Screenshot from 2022-11-16 19-59-08.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668625225552/nJTbdb8v4.png)

---

- [Example from the screenshots](https://sitek94.github.io/devtools-break-on-subtree-modifications)
- [StackOverflow solution by arxpoetica](https://stackoverflow.com/a/34095731)
