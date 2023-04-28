#!/bin/bash
source ../../src/chrono.sh

runnerName="Cypressio.ts"

preRunLog $runnerName
start=$(getChrono)

npx cypress run

end=$(getChrono)
postRunLog $runnerName $start $end