# ts-functions-library

A comprehensive collection of reusable TypeScript functions organised by category. The project offers simple utilities for working with arrays, objects, strings, dates, numbers and more. Every function is unit tested so you can rely on them in your own applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Building](#building)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation
This library requires **Node.js 20 or later**. Install the package using your favourite package manager:

```bash
# npm
npm install ts-functions-library

# yarn
yarn add ts-functions-library

# pnpm
pnpm add ts-functions-library
```
## Usage
Import the functions you need directly from the package root:

```ts
import { chunkArray, deepMerge } from 'ts-functions-library';
```
## Directory Structure
The main folders group functions by purpose:

- **arrayFunctions** – helpers for arrays such as `chunkArray`, `flattenArray`, and `mergeUnique`.
- **objectFunctions** – utilities for manipulating objects including `deepMerge`, `safeGet`, and `groupByObject`. The `deepClone` helper now uses Node's `structuredClone` when available and falls back to JSON serialization in older environments.
- **stringFunctions** – text related helpers like `slugify`, `trimWhitespace`, and `isValidEmail`.
- **dateFunctions** – date utilities such as `formatDate`, `addMonths`, and `getWeekNumber`.
- **encodingFunctions** – simple Base64 encoding/decoding helpers. `encodeBase64` and `decodeBase64` rely on Node's `Buffer`, so browsers may need alternatives like `btoa`/`atob`.
- **mathFunctions** – mathematical helpers, including geometric calculations.
- **utilityFunctions** – assorted utilities like `debounce`, `throttle`, and `hexToRgb`.

## Building
Compile the TypeScript source with:

```bash
npm run build
```
This outputs compiled JavaScript files to the `dist/` directory. Ensure you have installed dependencies first with `npm install`.

## Testing
Jest is used for all unit tests. Install dependencies first with `npm install`.
Tests generate an Allure report, so the Allure CLI must be available in your
`PATH`. Install it with `npm install -D allure-commandline` or rely on
`npx allure`.
Run the full test suite with:

```bash
npm test
```
The command runs `run-tests.sh`, which executes Jest and generates an Allure report. Results are stored in `allure-results` and the final report in `allure-report`.
By default the report is not opened automatically. Use the `--open-report` flag
or set `OPEN_REPORT=true` to view the report after generation:

```bash
npm test -- --open-report
# or
OPEN_REPORT=true npm test
```
## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
