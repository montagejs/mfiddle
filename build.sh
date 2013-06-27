#!/bin/bash
# exit on errors and echo commands as they are executed
set -e -x

ROOT_DIR="$(dirname ${BASH_SOURCE[0]})"
OUT_DIR="$ROOT_DIR/generated"
DEPLOY_DIR="$ROOT_DIR/deploy"
MASTER_HASH="$(git rev-parse --short HEAD)"
GIT_REPO="git@github.com:aadsm/mfiddle.git"

if [ -e "$DEPLOY_DIR" ]; then
    echo "Error: $DEPLOY_DIR exists, please remove it before continue."
    exit -1
fi

if [ -e "$OUT_DIR" ]; then
    echo "Error: $OUT_DIR exists, please remove it before continue."
    exit -1
fi

# Clone master and install modules
mkdir -p "$OUT_DIR"
git clone --branch master "$GIT_REPO" "$OUT_DIR"
pushd "$OUT_DIR"
npm update
popd

# Do the mop!
"$OUT_DIR/mop-it.sh"

# Clone gh-pages branch and clean it up for the new build
mkdir -p "$DEPLOY_DIR"
git clone --branch gh-pages "$GIT_REPO" "$DEPLOY_DIR"
rm -rf "$DEPLOY_DIR"/*

# Move the mopped version into the gh-pages branch
mv "$OUT_DIR/builds/mfiddle"/* "$DEPLOY_DIR"
pushd "$DEPLOY_DIR"
# remove tracked files that have been deleted
git add --update
# add new files
git add .
git commit -m "Update to master $MASTER_HASH" || :
popd

rm -rf "$OUT_DIR"

echo "Done."