#!/bin/sh
# Run Jest unit tests and generate an Allure report

# Function to print messages with timestamps
log_with_time() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log_with_time "[INFO] Running tests"

# Default behavior does not open the Allure report. Use --open-report flag or
# set OPEN_REPORT=true to automatically open it after generation.
OPEN_REPORT_FLAG=false
for arg in "$@"; do
  case "$arg" in
    --open-report)
      OPEN_REPORT_FLAG=true
      ;;
  esac
done

# Ensure local node binaries are available
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export PATH="$SCRIPT_DIR/node_modules/.bin:$PATH"

# Print the current local time
log_with_time "[INFO] Current local time: $(date)"

# Print the current time in UTC
log_with_time "[INFO] Current time in UTC: $(date -u)"
# Determine current timezone for logging purposes
current_timezone=$(date +%Z)
log_with_time "[INFO] Current timezone: $current_timezone"

# Change timezone to UTC if it's not already UTC
if [ "$current_timezone" != "UTC" ]; then
  log_with_time "[INFO] Changing timezone to UTC"
  export TZ=UTC
fi

# Verify the timezone change
# Log the timezone after any change
log_with_time "[INFO] Timezone after change: $(date +%Z)"

# Check if Allure is installed
if ! command -v allure >/dev/null 2>&1; then
    log_with_time "[ERROR] Allure is not installed. Please install it and try again."
    exit 1
fi

# Check if Jest is installed
if ! command -v jest >/dev/null 2>&1; then
    log_with_time "[ERROR] Jest is not installed. Please install it and try again."
    exit 1
fi

# Run Jest tests
log_with_time "[INFO] Running Jest tests"
if ! jest; then
  log_with_time "[WARNING] Jest tests failed, but continuing with the script"
fi

# Generate Allure report
# Results are written to allure-results and HTML report to allure-report
log_with_time "[INFO] Generating Allure report"
if ! allure generate allure-results --clean -o allure-report; then
  log_with_time "[ERROR] Failed to generate Allure report, but continuing with the script"
fi

# Open Allure report if requested
if [ "$OPEN_REPORT_FLAG" = "true" ] || [ "${OPEN_REPORT:-false}" = "true" ]; then
  log_with_time "[INFO] Opening Allure report"
  if ! allure open allure-report; then
    log_with_time "[ERROR] Failed to open Allure report, but continuing with the script"
  fi
else
  log_with_time "[INFO] Allure report not opened (use --open-report or set OPEN_REPORT=true)"
fi

log_with_time "[INFO] Test execution completed"
