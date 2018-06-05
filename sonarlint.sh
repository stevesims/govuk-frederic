#!/bin/bash
sonarlint --src "src/**.js" --tests "src/**.unit.js"
/usr/bin/open -a "/Applications/Google Chrome.app" .sonarlint/sonarlint-report.html
