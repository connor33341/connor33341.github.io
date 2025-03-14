const elements = [];

export function createButton(link, text, newTab = false) {
    const buttonTemplate = document.createElement("template");
    buttonTemplate.innerHTML = `
	<a style="text-decoration: none" href="${link}" ${newTab ? 'target="_blank"' : ""}>
		<div class="simple-button">
			<div class="label">${text}</div>
		</div>
	</a>
	`.trim();
    const button = buttonTemplate.content.firstChild;
    elements.push(button);
}

export function addLine() {
    elements.push(document.createElement("hr"));
}

export function btnLib() {
    setInterval(() => {
        const buttonList = document.querySelector(".side-menu .content")?.children.item(0);
        if (!buttonList) return; // Sidebar is not open

        // Check if the buttons are already in the sidebar
        if (Array.from(buttonList.children).every(el => el.tagName === "HR" || el.className === "simple-button")) {
            buttonList.append(...elements);
        }
    }, 10);
}