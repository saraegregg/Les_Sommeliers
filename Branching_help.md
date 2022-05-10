# Here is what we did to create a branch

(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20
$ git clone git@github.com:saraegregg/Mod20_Group_Challenge.git
Cloning into 'Mod20_Group_Challenge'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20
$ cd Mod20_Group_Challenge/
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (main)
$ git checkout -b saras_branch
Switched to a new branch 'saras_branch'
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ echo "text as an example" > saras_file
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ ls
README.md  saras_file
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ git add .
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ git commit -m "This is practice. Does it count as one of my 4 commits?"
[saras_branch f38cb43] This is practice. Does it count as one of my 4 commits?
 1 file changed, 1 insertion(+)
 create mode 100644 saras_file
(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ git push
fatal: The current branch saras_branch has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin saras_branch

(mlenv)
SE@DESKTOP-T2M03QA MINGW64 ~/um/hw/20/Mod20_Group_Challenge (saras_branch)
$ git push --set-upstream origin saras_branch
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 376 bytes | 125.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'saras_branch' on GitHub by visiting:
remote:      https://github.com/saraegregg/Mod20_Group_Challenge/pull/new/saras_branch
remote:
To github.com:saraegregg/Mod20_Group_Challenge.git
 * [new branch]      saras_branch -> saras_branch
Branch 'saras_branch' set up to track remote branch 'saras_branch' from 'origin'.