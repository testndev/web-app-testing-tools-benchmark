#!/bin/bash
source ../../src/chrono.sh

runnerName="WebdriverIO"

preRunLog $runnerName
start=$(getChrono)

npx wdio run ./wdio.conf.ts | tee -a $stdoutLogsPath

end=$(getChrono)
postRunLog $runnerName $start $end