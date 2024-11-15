/**
 * Formats a Date object into a human-readable string.
 * 
 * @param date - The Date object to format.
 * @param format - The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
 * @returns The formatted date string.
 * @throws Will throw an error if the date is invalid or if the format string contains unsupported tokens.
 */
export function formatDate(date: Date, format: string): string {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    if (typeof format !== 'string') {
        throw new Error('Invalid format string');
    }

    const supportedTokens = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss'];
    const formatTokens = format.match(/YYYY|MM|DD|HH|mm|ss/g) || [];

    for (const token of formatTokens) {
        if (!supportedTokens.includes(token)) {
            throw new Error(`Unsupported format token: ${token}`);
        }
    }

    const map: { [key: string]: number | string } = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'DD': String(date.getDate()).padStart(2, '0'),
        'HH': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0'),
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched]);
}

// Example usage:
// const date = new Date();
// formatDate(date, 'YYYY-MM-DD HH:mm:ss'); // e.g., '2024-09-19 15:45:30'