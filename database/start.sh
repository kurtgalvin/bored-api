#!/bin/bash

printf "\nRunning Database SQL Scripts\n"

# Make newlines the only separator so that each word doesn't break in the function def file
IFS=$'\n'

# Patterns that don't match a file return null
shopt -s nullglob

function runSql() {
  printf "\n"
  printf "=================================================================================="
  printf "================================================================================\n"
  printf "File: %s\n" $1
  printf "=================================================================================="
  printf "================================================================================\n"
	psql --username "$POSTGRES_USER" -v ON_ERROR_STOP=1 -f "$1" -d "$2"
  rc=$?
  if [ $rc -ne 0 ]; then
    printf "\n***FATAL ERROR: Postgres statement failed***"
    exit $rc;
  fi
}

########################
# INITIALIZE DATABASE
########################
files=( /sql_scripts/initial/*.sql )

for file in ${files[@]}
do
  runSql "$file" "postgres"
done
