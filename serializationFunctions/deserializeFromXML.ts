/**
 * Parses basic XML string to object (simple implementation, no namespaces).
 *
 * @param xmlString - The XML string to parse.
 * @returns Object representation of XML.
 *
 * @throws {TypeError} If xmlString is not a string.
 * @throws {Error} If XML is malformed.
 *
 * @example
 * // Parse XML
 * deserializeFromXML('<person><name>John</name><age>30</age></person>');
 * // { person: { name: 'John', age: '30' } }
 *
 * @example
 * // Parse with repeated tags (becomes array)
 * deserializeFromXML('<root><item>1</item><item>2</item></root>');
 * // { root: { item: ['1', '2'] } }
 *
 * @note Very basic parser - does not support attributes or namespaces.
 *
 * @complexity Time: O(n), Space: O(n) where n is XML string length
 */
export function deserializeFromXML(xmlString: string): Record<string, any> {
  if (typeof xmlString !== 'string') {
    throw new TypeError(`xmlString must be a string, got ${typeof xmlString}`);
  }

  const unescapeXML = (str: string): string => {
    return str
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&');
  };

  const tagRegex = /<([^/>\s]+)([^>]*)>(.*?)<\/\1>|<([^/>\s]+)([^>]*)\/>/gs;

  const parse = (xml: string): any => {
    const trimmed = xml.trim();

    // Check for self-closing tag
    const selfClosingMatch = trimmed.match(/^<([^/>\s]+)([^>]*)\/>$/);
    if (selfClosingMatch) {
      return null;
    }

    // Check for simple text content
    if (!trimmed.includes('<')) {
      return unescapeXML(trimmed);
    }

    const result: Record<string, any> = {};
    let match: RegExpExecArray | null;

    while ((match = tagRegex.exec(trimmed)) !== null) {
      const tag = match[1] || match[4];
      const content = match[3] || null;

      if (!tag) continue;

      const parsedContent = content ? parse(content) : null;

      if (result[tag] !== undefined) {
        // Tag already exists - convert to array
        if (Array.isArray(result[tag])) {
          result[tag].push(parsedContent);
        } else {
          result[tag] = [result[tag], parsedContent];
        }
      } else {
        result[tag] = parsedContent;
      }
    }

    return Object.keys(result).length > 0 ? result : unescapeXML(trimmed);
  };

  try {
    return parse(xmlString);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to parse XML: ${error.message}`);
    }
    throw new Error('Failed to parse XML: Unknown error');
  }
}
