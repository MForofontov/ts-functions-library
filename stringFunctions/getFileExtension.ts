/**
 * Extracts the file extension from a filename.
 * 
 * @param filename - The filename to analyze.
 * @returns The file extension, or an empty string if none exists.
 */
export function getFileExtension(filename: string): string {
    const match = filename.match(/\.([^.]+)$/);
    return match ? match[1] : '';
}

// Example usage:
// getFileExtension("document.pdf"); // "pdf"