#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

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

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "[ERROR] Node.js is not installed. Please install Node.js to run the tests."
  exit 1
fi

# Check if Jest is installed
if ! command -v npx &> /dev/null; then
  echo "[ERROR] npx is not installed. Please install npm to run the tests."
  exit 1
fi

# Run Jest tests
echo "[INFO] Running Jest tests"
npx jest