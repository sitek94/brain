---
title: Share files in local network
tags: linux, mac, networking
createdAt: 29/10/2022
---

# Share files in local network

## Problem

I've got two laptops, Lenovo with Ubuntu and a Mac, and I want to share some files, without using any external hard
drives or USB sticks.

## `scp`

I used [scp (secure file copy)](https://www.ssh.com/academy/ssh/scp), which allows copying files between computers using
[SSH Protocol](https://www.ssh.com/academy/ssh/protocol).

## Command

On my mac I run the command below, and after a while all files were transfered.

```bash
scp -r /Users/maciek/photos maciek@192.168.1.14:/home/maciek/
```

- `-r` - recursively copy entire directories
- `/Users/maciek/photos` - absolutele path of the directory I want to copy (you could also use relative path)
- `maciek@192.168.1.14:/home/maciek/` - `[user@]host:[path]`
