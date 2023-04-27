#!/bin/bash
runner="Playwright.TestRunner"
echo "##[$runner] ▶ start running all tests"
start=$(date +%s%N)
npx playwright test --config playwright.config.ts
end=$(date +%s%N)
echo "##[$runner] ◼ Elapsed time: $(($(($end-$start))/1000000)) ms"