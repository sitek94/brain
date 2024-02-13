---
title: Sync files in local network
tags: linux, mac, networking
createdAt: 31/10/2022
---

# Sync files in local network

Recently, I needed to send some files to my old laptop, and I used `scp` to do that. I also wrote
[a short post about it](https://blog.macieksitkowski.com/how-to-share-files-in-local-network).

## Problem

However, it turned out that I also needed to send 70 GB of photos and videos, and while I was sending it via `scp`, the
connection broke, and I was left with around 50% of files not sent. Obviously, I didn't want to manually check which
photos have been sent, and which not. There has to be a better way to do that, I thought. And there is!

## Solution - rsync

Rsync is a file copying tool, but what's really cool about it is that, like the name suggests, it allows you to sync
files. It checks the difference between the source and the files at the destination, and sends only the missing ones.

## Command

```shell
rsync -avzP Users/maciek/photos maciek@192.168.1.14:/home/maciek
```

- `a` - archive, it combines recursion (`-r`) and preserves other stuff, e.g. modification times
- `v` - verbose, more info about the files being transferred, because by default rsync works silently
- `z` - compress the data being sent
- `P` - combines `--partial`, which allows to resume interrupted transfers, and `--progress`, which shows progress
  during transfer

---

- [rsync tutorial by By Jeanelle Horcasitas and Justin Ellingwood](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories)
- [rsync man page](https://linux.die.net/man/1/rsync)
