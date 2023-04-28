#!/bin/bash
source ../../src/chrono.sh

runnerName="NightWatchjs.ts"

preRunLog $runnerName
start=$(getChrono)

npx nightwatch --headless | tee -a $stdoutLogsPath

end=$(getChrono)
postRunLog $runnerName $start $end