#!/bin/bash
source ../../src/chrono.sh

runnerName="Selenium_Jest.ts"

preRunLog $runnerName
start=$(getChrono)

npx jest | tee -a $stdoutLogsPath

end=$(getChrono)
postRunLog $runnerName $start $end