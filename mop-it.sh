#!/bin/bash
# exit on errors and echo commands as they are executed
set -e -x

MFIDDLE_DIR="$(dirname ${BASH_SOURCE[0]})"
# We should probably read the dependencies from the package.json but let's keep
# simple for now.
FRAME_DEPS="montage matte digit"
FRAME_DIR="ui/montage-frame.reel/frame"
FRAME_DIR_SRC="$MFIDDLE_DIR/$FRAME_DIR"
FRAME_DIR_DEST="$MFIDDLE_DIR/builds/mfiddle/$FRAME_DIR"
FRAME_BUILD_DIR="$FRAME_DIR_DEST/builds/mfiddle-frame"

# Mop mfiddle itself first, this will not mop the frame application used by
# montage-frame.reel component. We do it manually afterwards.
mop "$MFIDDLE_DIR"

# Copy frame directory to the mopped montage-frame.reel this directory is
# skipped when mopping mfiddle.
cp -a "$FRAME_DIR_SRC" "$FRAME_DIR_DEST"

# Frame uses mapped dependencies, however, in order to mop it we need to use
# regular dependencies. These two files are versions of the original that use
# the dependencies property of the package.json.
mv "$FRAME_DIR_DEST/package-mop.json" "$FRAME_DIR_DEST/package.json"
mv "$FRAME_DIR_DEST/frame-mop.html" "$FRAME_DIR_DEST/frame.html"

# Instead of npm install we copy over the node_modules used in mfiddle in order
# to make sure that mfiddle and frame use the exact same module versions.
mkdir -p "$FRAME_DIR_DEST/node_modules"
for dep in $FRAME_DEPS; do
    # Warning: will fail if the modules are relative symbolic links
    cp -a "$MFIDDLE_DIR/node_modules/$dep" "$FRAME_DIR_DEST/node_modules/$dep"
done

# Mop the frame application
mop "$FRAME_DIR_DEST"

# Replace the frame directory with the result of the mopped build

# -H    If the -R option is specified, symbolic links on the command line are
# followed.  (Symbolic links encountered in the tree traversal are not
# followed.)
cp -RH "$FRAME_BUILD_DIR" "$FRAME_DIR_DEST/../"
rm -rf "$FRAME_DIR_DEST"

PARENT_DIR=$(dirname "$FRAME_DIR_DEST")
FRAME_APP_NAME=$(basename "$FRAME_BUILD_DIR")
mv "$PARENT_DIR/$FRAME_APP_NAME" "$FRAME_DIR_DEST"


