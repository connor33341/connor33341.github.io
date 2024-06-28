// redirect.js

/**
 * Redirects the user to the specified URL.
 * @param {string} url - The URL to which the user will be redirected.
 */
function redirect(url) {
    if (!url || typeof url !== 'string') {
        throw new Error('A valid URL must be provided.');
    }

    window.location.href = url;
}

// Export the redirect function as a module
export { redirect };
