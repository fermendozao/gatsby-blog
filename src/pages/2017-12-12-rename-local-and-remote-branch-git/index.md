---
path: "/rename-local-and-remote-branch-git"
date: "2017-12-12T01:19:07+00:00"
title: "Rename a local and remote branch in git"
excerpt: ""
tags: ['git', 'branch', 'branch names']
---

1. **Rename your local branch**

If you are on the branch you want to rename

```bash
git branch -m new-name
```

If you are on a different branch

```bash
git branch -m old-name new-name
```

2. **Delete the old-name remote branch and push the new-name local branch**

```bash
git push origin :old-name new-name
```

3. **Reset the upstream branch for the new-name local branch**

```bash
git push origin -u new-name
```