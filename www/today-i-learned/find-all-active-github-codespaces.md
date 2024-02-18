---
title: Find all active GitHub Codespaces
tags: github, codespaces, github-cli
createdAt: 18/11/2022
---

# Find all active GitHub Codespaces

> Update: It's now possible to view Codespaces in GitHub: [github.com/codespaces](https://github.com/codespaces)

Today, I've run out of [GitHub Codespaces](https://github.com/features/codespaces) storage.

![Screenshot from 2022-11-18 20-25-28.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668799585963/x9Bbgzuw7.png)

It was a bit surprising to me, as I haven't used codespaces in a while, so I wanted to check if maybe I've got some
active ones.

I couldn't find any way on GitHub itself to find a list of active codespaces and going through almost 300 repos was
definitely not an option.

Fortunately, there is an
[endpoint, that lists codespaces for authenticated user](https://docs.github.com/en/rest/codespaces/codespaces#list-codespaces-for-the-authenticated-user)
and if you've got [GitHub CLI](https://cli.github.com/) you can easily use it from the terminal.

```shell
> gh codespace list
```

Probably, like me, you want have required and will get a following error:

```
error getting codespaces: HTTP 403: Must have admin rights to Repository. (https://api.github.com/user/codespaces?per_page=30)
This API operation needs the "codespace" scope. To request it, run:  gh auth refresh -h github.com -s codespace
```

Follow the instructions and after running the command again you should get a list of your active codespaces:

```
sitek@ubuntu-desktop:~$ gh codespace list
NAME                                               DI...  REPO  BRAN  STAT  CREA
sitek94-gh-codespaces-demo-5wg4jrjgf4r5            su...  site  main  Shut  May
sitek94-tailwindlabs-tailwindcss-com-xj597p75cwwq  li...  tail  mast  Shut  Jun
sitek94-tailwindcss-com-4xjg5v5jfq5g4              fi...  site  docs  Shut  Jun
```

Now, you see all your active codespaces and you can cancel the ones, that you don't use anymore.

---

- [GitHub Codespaces](https://github.com/features/codespaces)
- [GitHub CLI](https://cli.github.com/)💡
