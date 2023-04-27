#!/bin/bash
runner="Selenium+Jest.TestRunner"
echo "##[$runner] ▶ start running all tests"
start=$(date +%s%N)
npx jest
end=$(date +%s%N)
echo "##[$runner] ◼ Elapsed time: $(($(($end-$start))/1000000)) ms"