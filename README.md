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
Install the package using your favourite package manager:

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
- **objectFunctions** – utilities for manipulating objects including `deepMerge`, `safeGet`, and `groupByObject`.
- **stringFunctions** – text related helpers like `slugify`, `trimWhitespace`, and `isValidEmail`.
- **dateFunctions** – date utilities such as `formatDate`, `addMonths`, and `getWeekNumber`.
- **encodingFunctions** – simple Base64 encoding/decoding helpers.
- **mathFunctions** – mathematical helpers, including geometric calculations.
- **utilityFunctions** – assorted utilities like `debounce`, `throttle`, and `hexToRgb`.

## Building
Compile the TypeScript source with:

```bash
npm run build
```

This outputs compiled JavaScript files to the `dist/` directory. Ensure you have installed dependencies first with `npm install`.

## Testing
Jest is used for all unit tests. Run the full test suite with:

```bash
npm test
```

The command runs `run-tests.sh`, which executes Jest and generates an Allure report. Results are stored in `allure-results` and the final report in `allure-report`.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

This project is licensed under the GNU General Public License (GPL). See the [LICENSE](LICENSE) file for details.
