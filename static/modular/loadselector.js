// connor33341
// MIT Lisence

export async function loadSelector(selector, url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.querySelector(selector).innerHTML = data;
    } catch (error) {
        console.error('Error loading toolbar:', error);
    }
}
