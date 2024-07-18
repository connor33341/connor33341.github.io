// Import a markdown library
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

// Function to fetch JSON data
async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch JSON from ${url}`);
    }
    return response.json();
}

// Function to parse URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        owner: params.get('owner'),
        repo: params.get('repo'),
        entrypoint: params.get('entrypoint')
    };
}

// Function to fetch the content from GitHub
async function fetchContent(owner, repo, entrypoint) {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${entrypoint}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch content from ${url}`);
    }

    return response.text();
}

// Function to render the content
function renderContent(content) {
    const container = document.getElementById('content');
    container.innerHTML = marked(content);
}

// Main function to load and render the content
async function loadAndRender() {
    try {
        const defaults = await fetchJson('./defaults.json');
        const { owner, repo, entrypoint } = { ...defaults, ...getUrlParams() };

        if (!repo) {
            throw new Error('Repository name is required.');
        }

        const content = await fetchContent(owner, repo, entrypoint);
        renderContent(content);
    } catch (error) {
        console.error(error);
        const container = document.getElementById('content');
        container.innerHTML = `<p>Error loading content: ${error.message}</p>`;
    }
}

// Export the loadAndRender function as the default export
export default loadAndRender;
