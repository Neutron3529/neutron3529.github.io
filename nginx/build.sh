#!/bin/bash
cd `dirname $0`
for i in *.pre.sh ; do . $i ; done
rm README.md
cat *.md > README.md
git add *
git commit -am "exec build"
git push
