import { getFileExtension } from '../../stringFunctions/getFileExtension';

/**
 * Unit tests for the getFileExtension function.
 */
describe('getFileExtension', () => {
    // Test case 1: Extract the file extension from a simple filename
    it('1. should extract the file extension from a simple filename', () => {
        const filename: string = "document.pdf";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 2: Extract the file extension from a filename with multiple dots
    it('2. should extract the file extension from a filename with multiple dots', () => {
        const filename: string = "archive.tar.gz";
        const expected: string = "gz";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 3: Extract the file extension from a filename without an extension
    it('3. should return an empty string for a filename without an extension', () => {
        const filename: string = "README";
        const expected: string = "";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 4: Extract the file extension from a hidden file
    it('4. should return an empty string for a hidden file without an extension', () => {
        const filename: string = ".gitignore";
        const expected: string = "";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 5: Extract the file extension from a filename with a dot at the end
    it('5. should return an empty string for a filename with a dot at the end', () => {
        const filename: string = "document.";
        const expected: string = "";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 6: Extract the file extension from a filename with leading spaces
    it('6. should extract the file extension from a filename with leading spaces', () => {
        const filename: string = "   document.pdf";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 7: Extract the file extension from a filename with trailing spaces
    it('7. should extract the file extension from a filename with trailing spaces', () => {
        const filename: string = "document.pdf   ";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 8: Extract the file extension from a filename with both leading and trailing spaces
    it('8. should extract the file extension from a filename with both leading and trailing spaces', () => {
        const filename: string = "   document.pdf   ";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 9: Extract the file extension from a filename with special characters
    it('9. should extract the file extension from a filename with special characters', () => {
        const filename: string = "file@name!.pdf";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 10: Extract the file extension from a filename with numbers
    it('10. should extract the file extension from a filename with numbers', () => {
        const filename: string = "file123.pdf";
        const expected: string = "pdf";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 11: Extract the file extension from a filename with mixed case
    it('11. should extract the file extension from a filename with mixed case', () => {
        const filename: string = "Document.PDF";
        const expected: string = "PDF";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 12: Extract the file extension from a filename with a single character extension
    it('12. should extract the file extension from a filename with a single character extension', () => {
        const filename: string = "file.a";
        const expected: string = "a";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });

    // Test case 13: Extract the file extension from a filename with a long extension
    it('13. should extract the file extension from a filename with a long extension', () => {
        const filename: string = "file.extension";
        const expected: string = "extension";
        const result: string = getFileExtension(filename);
        expect(result).toBe(expected);
    });
});
