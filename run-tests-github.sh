#!/bin/sh

# Function to print messages with timestamps
log_with_time() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log_with_time "[INFO] Starting test execution script"

# Print the current local time
log_with_time "[INFO] Current local time: $(date)"

# Print the current time in UTC
log_with_time "[INFO] Current time in UTC: $(date -u)"

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
log_with_time "[INFO] Generating Allure report"
if ! allure generate allure-results --clean -o allure-report; then
    log_with_time "[ERROR] Failed to generate Allure report, but continuing with the script"
fi

log_with_time "[INFO] Test execution completed"
