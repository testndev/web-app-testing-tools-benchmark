#!/bin/bash
source ../../src/chrono.sh

runnerName="NightWatchjs.ts"

preRunLog $runnerName
start=$(getChrono)

npx nightwatch --headless

end=$(getChrono)
postRunLog $runnerName $start $end