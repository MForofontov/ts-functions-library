#!/bin/sh

echo "[INFO] Running tests"

# Print the current local time
echo "[INFO] Current local time: $(date)"

# Print the current time in UTC
echo "[INFO] Current time in UTC: $(date -u)"

# Check the current timezone
current_timezone=$(date +%Z)
echo "[INFO] Current timezone: $current_timezone"

# Change timezone to UTC if it's not already UTC
if [ "$current_timezone" != "UTC" ]; then
  echo "[INFO] Changing timezone to UTC"
  export TZ=UTC
fi

# Verify the timezone change
echo "[INFO] Timezone after change: $(date +%Z)"

# Run Jest tests
echo "[INFO] Running Jest tests"
npx jest

# Generate Allure report
echo "[INFO] Generating Allure report"
allure generate /home/ummi/Downloads/test/jest/allure-results --clean -o /home/ummi/Downloads/test/jest/allure-report

# Open Allure report
echo "[INFO] Opening Allure report"
allure open /home/ummi/Downloads/test/jest/allure-report