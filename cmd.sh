#!/usr/bin/env sh

#define a string var


# save this cmd in a string du -h . | sort -hr
echo "FILES=$(du  -h frontend/out | sort -hr)" >> NEW_VAR



exit 0
# folder of the work dir
work_dir=$(pwd)
only_the_name=$(basename $work_dir)
echo "work dir: $work_dir"



printf 'Name:\n%s\n' "$(ls frontend)"