#!/bin/bash

echo "framework;filename;count" > results/non_empty_line_count.csv

file_list=$(find ./tests -type f -name "*spec.ts" -not -path "*/node_modules/*"  )


for file in $file_list; do
  framework=$(echo "$file" | grep -oP '(?<=with-)[\w-]+(?=\/)')
  fileName=$(echo "$file" | grep -oP '[^/]+$')
  line_count=$(grep -v '^\s*$' "$file" | wc -l)

  echo "$framework ; $fileName ; $line_count" >> results/non_empty_line_count.csv
done