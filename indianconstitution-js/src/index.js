/**
 * @module @vikhram-s/indianconstitution-js
 * @version 0.1.0
 * @description Welcome to indianconstitution-js! This library provides easy access to Indian Constitution data,
 *              including articles, the Preamble, keyword searches, and more. Whether you're building an educational
 *              tool or exploring legal data, this module has you covered with a simple, intuitive API.
 *              Install via `npm install @vikhram-s/indianconstitution-js` and start exploring below!
 * @author Vikhram S <vikhrams@saveetha.ac.in>
 * @license Apache License 2.0 - See the LICENSE file for details.
 * @see {@link https://github.com/Vikhram-S/indianconstitution-js} for source code and documentation.
 */

const IndianConstitution = require('./indianConstitution');

/**
 * Metadata about the library for reference.
 * @constant {Object} metadata
 * @property {string} title - The scoped package name.
 * @property {string} version - Current version of the library.
 * @property {string} author - Creator of the library.
 * @property {string} license - Licensing information.
 */
const metadata = {
    title: '@vikhram-s/indianconstitution-js',
    version: '0.6.0',
    author: 'Vikhram S',
    license: 'Apache License 2.0'
};

/**
 * Retrieves the Preamble of the Indian Constitution.
 * @returns {string} The cleaned Preamble text or an error message if not found.
 * @example
 * const { getPreamble } = require('@vikhram-s/indianconstitution-js');
 * console.log(getPreamble()); // "We, the people of India..."
 */
function getPreamble() {
    const instance = new IndianConstitution();
    return instance.preamble();
}

/**
 * Fetches details of a specific article by its number.
 * @param {number|string} number - The article number (e.g., 14 or "14").
 * @returns {string} Formatted article details (e.g., "Article 14: Equality before law...") or "Article not found."
 * @throws {Error} If the input is neither a number nor a string.
 * @example
 * const { getArticle } = require('@vikhram-s/indianconstitution-js');
 * console.log(getArticle(14)); // "Article 14: Equality before law..."
 */
function getArticle(number) {
    if (typeof number !== 'number' && typeof number !== 'string') {
        throw new Error('Oops! The article number must be a number or string (e.g., 14 or "14").');
    }
    const numberStr = String(number);
    const instance = new IndianConstitution();
    return instance.getArticle(numberStr);
}

/**
 * Lists all articles in the Constitution with their titles.
 * @returns {string} A newline-separated list of articles (e.g., "Article 1: Name and territory...").
 * @example
 * const { listArticles } = require('@vikhram-s/indianconstitution-js');
 * console.log(listArticles());
 */
function listArticles() {
    const instance = new IndianConstitution();
    return instance.articlesList();
}

/**
 * Searches for articles containing a specific keyword in their title or description.
 * @param {string} keyword - The keyword to search for (case-insensitive).
 * @returns {string} A newline-separated list of matching articles or "No articles found..."
 * @throws {Error} If the keyword is not a string.
 * @example
 * const { searchKeyword } = require('@vikhram-s/indianconstitution-js');
 * console.log(searchKeyword('equality')); // Articles mentioning "equality"
 */
function searchKeyword(keyword) {
    if (typeof keyword !== 'string') {
        throw new Error('Hey there! The keyword must be a string (e.g., "equality").');
    }
    const instance = new IndianConstitution();
    return instance.searchKeyword(keyword);
}

/**
 * Provides a brief summary of a specified article.
 * @param {number|string} number - The article number (e.g., 21 or "21").
 * @returns {string} A concise summary (e.g., "Article 21 - Protection of life...") or "Article not found."
 * @throws {Error} If the input is neither a number nor a string.
 * @example
 * const { getArticleSummary } = require('@vikhram-s/indianconstitution-js');
 * console.log(getArticleSummary(21)); // "Article 21 - Protection of life..."
 */
function getArticleSummary(number) {
    if (typeof number !== 'number' && typeof number !== 'string') {
        throw new Error('Whoops! The article number must be a number or string (e.g., 21 or "21").');
    }
    const numberStr = String(number);
    const instance = new IndianConstitution();
    return instance.articleSummary(numberStr);
}

/**
 * Counts the total number of articles in the Constitution.
 * @returns {number} The total count of articles.
 * @example
 * const { countTotalArticles } = require('@vikhram-s/indianconstitution-js');
 * console.log(countTotalArticles()); // e.g., 448
 */
function countTotalArticles() {
    const instance = new IndianConstitution();
    return instance.countArticles();
}

/**
 * Searches for articles by a keyword in their titles.
 * @param {string} titleKeyword - The keyword to search in article titles (case-insensitive).
 * @returns {string} A newline-separated list of matching titles or "No articles found..."
 * @throws {Error} If the title keyword is not a string.
 * @example
 * const { searchByTitle } = require('@vikhram-s/indianconstitution-js');
 * console.log(searchByTitle('Fundamental')); // Articles with "Fundamental" in title
 */
function searchByTitle(titleKeyword) {
    if (typeof titleKeyword !== 'string') {
        throw new Error('Just a heads-up: The title keyword must be a string (e.g., "Fundamental").');
    }
    const instance = new IndianConstitution();
    return instance.searchByTitle(titleKeyword);
}

// Export the library API for user access
module.exports = {
    IndianConstitution, // Direct access to the class for advanced usage
    getPreamble,        // "Start here to explore the Preamble!"
    getArticle,         // "Grab any article by its number."
    listArticles,       // "See all articles at a glance."
    searchKeyword,      // "Find articles by keyword—easy and fast."
    getArticleSummary,  // "Need a quick summary? This has you covered."
    countTotalArticles, // "Curious how many articles there are?"
    searchByTitle,      // "Search titles like a pro."
    ...metadata         // Library info for the curious
};