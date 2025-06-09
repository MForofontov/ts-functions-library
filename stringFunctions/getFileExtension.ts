/**
 * Gets the file extension from a given filename.
 *
 * @param filename - The filename to extract the extension from.
 * @returns The file extension, or an empty string if none exists.
 */
export function getFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (
    lastDotIndex === -1 ||
    lastDotIndex === 0 ||
    lastDotIndex === filename.length - 1
  ) {
    return '';
  }
  return filename.substring(lastDotIndex + 1);
}

// Example usage:
// getFileExtension("example.txt"); // "txt"
// getFileExtension("example"); // ""
