#!/bin/bash
source ../../src/chrono.sh

runnerName="Cypressio.ts"

preRunLog $runnerName
start=$(getChrono)

npx cypress run --browser chrome | tee -a $stdoutLogsPath

end=$(getChrono)
postRunLog $runnerName $start $end