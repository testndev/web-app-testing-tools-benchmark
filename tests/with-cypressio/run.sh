#!/bin/bash
runner="Cypress.io"
echo "##[$runner] ▶ start running all tests"
start=$(date +%s%N)
npx cypress run
end=$(date +%s%N)
echo "##[$runner] ◼ Elapsed time: $(($(($end-$start))/1000000)) ms"