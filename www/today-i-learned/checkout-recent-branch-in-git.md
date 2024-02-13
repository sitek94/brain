---
title: Checkout recent branch in git
tags: git, version-control
createdAt: 07/11/2022
---

# Checkout recent branch in git

Use the following command to checkout recent branch:

```shell
git checkout -
```

It's basically an alias for:

```shell
git checkout @{-1}
```

You can checkout any previous branch, by replacing `N` with the N-th last branch that was checked out.

```bash
git checkout @{-N}
```

Following diagram ([source](https://stackoverflow.com/a/33199051)), illustrates it perfectly:

![git-checkout-recent-branch.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1667845009489/b5dX7qkFW.jpg
align="left")

---

- [git-checkout &lt;branch&gt;](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt-ltbranchgt)
