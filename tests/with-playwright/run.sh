#!/bin/bash
source ../../src/chrono.sh

runnerName="Playwright.ts" 

preRunLog $runnerName
start=$(getChrono)

npx playwright test --config playwright.config.ts

end=$(getChrono)
postRunLog $runnerName $start $end