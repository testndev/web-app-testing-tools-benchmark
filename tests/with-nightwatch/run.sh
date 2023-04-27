#!/bin/bash
runner="NightWatch.js"
echo "##[$runner] ▶ start running all tests"
start=$(date +%s%N)
npx nightwatch --headless
end=$(date +%s%N)
echo "##[$runner] ◼ Elapsed time: $(($(($end-$start))/1000000)) ms"