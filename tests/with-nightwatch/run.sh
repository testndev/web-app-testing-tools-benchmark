#!/bin/bash
runner="NightWatch.js"
echo "##[$runner] ▶ start running all tests"
start=$(date +%s%N)
npx nightwatch --headless
end=$(date +%s%N)
elapsed_time="$(($(($end-$start))/1000000))"
elapsed_time_log_message="##[$runner] ◼ Elapsed time: $elapsed_time ms"
echo $elapsed_time_log_message
echo "\"$runner\";$elapsed_time;\"$(date --iso-8601=seconds)\"" >> ../chrono.csv