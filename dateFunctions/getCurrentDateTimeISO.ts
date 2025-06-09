/**
 * Gets the current date and time in ISO 8601 format.
 *
 * @returns The current date and time as an ISO string.
 */
export function getCurrentDateTimeISO(): string {
  return new Date().toISOString();
}

// Example usage:
// getCurrentDateTimeISO(); // e.g., '2024-09-19T15:45:30.000Z'
