#!/usr/bin/env bash


# folder of the work dir
work_dir=$(pwd)
only_the_name=$(basename $work_dir)
echo "work dir: $work_dir"


echo "from:\n$(ls frontend)"

printf 'Name:\n%s\n' "$(ls frontend)"