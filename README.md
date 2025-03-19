# @vikhram-s/indianconstitution-js (v0.1.0)

A robust JavaScript library designed to provide seamless access to the Constitution of India. This module enables developers to retrieve articles, explore summaries, perform keyword searches, and more, leveraging a comprehensive dataset embedded within the `IndianConstitution` class.

[![npm version](https://img.shields.io/npm/v/@vikhram-s/indianconstitution-js?label=npm)](https://www.npmjs.com/package/@vikhram-s/indianconstitution-js) [![License](https://img.shields.io/npm/l/@vikhram-s/indianconstitution-js?label=License&color=red)](https://github.com/Vikhram-S/indianconstitution-js/blob/main/LICENSE) [![Maintained](https://img.shields.io/maintenance/yes/2025?label=Maintained)](https://github.com/Vikhram-S/indianconstitution-js) [![Node.js](https://img.shields.io/node/v/@vikhram-s/indianconstitution-js?label=Node.js)](https://nodejs.org/) [![Downloads](https://img.shields.io/npm/dt/@vikhram-s/indianconstitution-js?label=Downloads&style=plastic)](https://www.npmjs.com/package/@vikhram-s/indianconstitution-js) [![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Vikhram-S.indianconstitution-js)](https://github.com/Vikhram-S/indianconstitution-js) [![GitHub Issues](https://img.shields.io/github/issues/Vikhram-S/indianconstitution-js?label=Issues)](https://github.com/Vikhram-S/indianconstitution-js/issues) [![GitHub Stars](https://img.shields.io/github/stars/Vikhram-S/indianconstitution-js?label=Stars)](https://github.com/Vikhram-S/indianconstitution-js)

## Installation

Install the library via npm to integrate it into your Node.js project:

```bash
npm install @vikhram-s/indianconstitution-js
```

## Features

- **Comprehensive Access**: Retrieve the full text of the Constitution of India, including the Preamble and individual articles.
- **Article Retrieval**: Fetch detailed information or concise summaries for any article by its number.
- **Search Capabilities**: Perform keyword-based searches across article content or filter by titles.
- **Utility Functions**: Count total articles and explore the dataset with ease.

## Usage

Get started with @vikhram-s/indianconstitution-js using these examples:

### Quick Example

```javascript
const { getArticle, IndianConstitution } = require('@vikhram-s/indianconstitution-js');

// Fetch an article directly
console.log(getArticle(14)); // "Article 14: Equality before law..."

// Use the class for advanced access
const india = new IndianConstitution();
console.log(india.preamble()); // "We, the people of India..."
```

### Detailed Node.js Example

```javascript
const { IndianConstitution } = require('@vikhram-s/indianconstitution-js');

// Instantiate the class
const india = new IndianConstitution();

// Access the Preamble
console.log(india.preamble());

// Retrieve article details
console.log(india.getArticle(14)); // "Article 14: Equality before law..."

// List all articles
console.log(india.articlesList());

// Search by keyword
console.log(india.searchKeyword('equality'));

// Get an article summary
console.log(india.articleSummary(21)); // "Article 21 - Protection of life..."

// Count total articles
console.log(india.countArticles());

// Search by title keyword
console.log(india.searchByTitle('Fundamental'));
```

## API Reference

| Function | Description |
|----------|-------------|
| `preamble()` | Returns the Preamble of the Constitution of India. |
| `getArticle(number)` | Retrieves full details of the specified article by number. |
| `articlesList()` | Lists all articles with their titles in a readable format. |
| `searchKeyword(word)` | Searches for a keyword across article titles and descriptions. |
| `articleSummary(num)` | Provides a concise summary of the specified article. |
| `countArticles()` | Returns the total number of articles in the Constitution. |
| `searchByTitle(title)` | Finds articles matching a keyword in their titles. |

## Development

This library is actively maintained. We welcome contributions, bug reports, and feature suggestions via GitHub Issues. For usage terms, refer to the LICENSE file.

## License

This project is licensed under the Apache License 2.0. See the LICENSE file for full details.

## Data Source

The Constitution data is meticulously compiled from publicly available, authoritative sources to ensure accuracy and reliability.

## Developer Information

- **Author**: Vikhram S  
- **Email**: [vikhrams@saveetha.ac.in](mailto:vikhrams@saveetha.ac.in)  
- **Python Companion**: IndianConstitution  

## Copyright

© 2025 Vikhram S. All rights reserved.

