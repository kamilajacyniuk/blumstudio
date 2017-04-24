#!/bin/bash
set -ev
gulp build
git clone https://github.com/kamilajacyniuk/blumstudio
cd blumstudio
git checkout gh-pages
cp -R ../dist/* .
git config user.name "Kamila Jacyniuk"
git config user.email kamilajacyniuk@gmail.com
git status
git add .
git commit -m "update gh-pages by Travis-CI" || true
git push ${GIT_HUB_REPO_SECRET} || true
