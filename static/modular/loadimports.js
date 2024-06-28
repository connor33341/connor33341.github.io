// loadImports.js

import { loadSelector } from './loadselector.js';

export async function loadImports(xmlUrl) {
    try {
        const response = await fetch(xmlUrl);
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const imports = xmlDoc.getElementsByTagName('import');

        for (let imp of imports) {
            const selector = imp.getElementsByTagName('selector')[0].textContent;
            const url = imp.getElementsByTagName('url')[0].textContent;
            await loadSelector(selector, url);
        }
    } catch (error) {
        console.error('Error loading imports:', error);
    }
}
