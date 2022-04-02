#!/bin/bash

printf "\nRunning Database SQL Scripts\n"

# Make newlines the only separator so that each word doesn't break in the function def file
IFS=$'\n'

files=( /sql_scripts/initial/*.sql )

for file in ${files[@]}
do
  psql --username "$POSTGRES_USER" -v ON_ERROR_STOP=1 -f "$file" -d "postgres"
done
