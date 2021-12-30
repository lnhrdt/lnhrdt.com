#!/usr/bin/env bash

if ! command -v convert &> /dev/null
then
    echo Install ImageMagick
    echo macOS: brew install imagemagick
    exit
fi

convert -density 256x256 -background transparent public/favicon.svg -define icon:auto-resize public/favicon.ico
