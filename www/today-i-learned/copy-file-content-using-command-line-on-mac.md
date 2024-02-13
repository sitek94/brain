---
title: Copy file content using command line on Mac
tags: mac, command-line
createdAt: 03/11/2022
---

# Copy file content using command line on Mac

Sometimes I want to quickly copy the contents of a file, e.g. when I'm creating a new SSH key.

Up until now, I would use `cat` to read the content, then select it and finally copy it.

```
$: cat id_rsa.pub
  ssh-rsa AAAAB3NzaC1y...
```

You can do it much faster, using
[pbcopy](https://osxdaily.com/2007/03/05/manipulating-the-clipboard-from-the-command-line/), which copies the file
content directly to the clipboard.

```shell
pbcopy < id_rsa.pub
```

Note, that, as the title of this post suggest, `pbcopy` is available only on Mac OS. For Linux, you might want to check
[xclip](https://opensource.com/article/19/7/xclip).
