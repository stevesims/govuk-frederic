@echo off
title SonarLint
sonarlint --src "src/**.js" --tests "src/**.unit.js"
call chrome.exe .sonarlint\sonarlint-report.html
pause
