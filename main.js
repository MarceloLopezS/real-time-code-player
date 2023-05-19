const navbar = document.querySelector('.navbar__nav');
const navbarTabs = navbar.querySelectorAll('.navbar__tab');

const mainSection = document.querySelector('.main-section');
const codeInputs = mainSection.querySelectorAll('textarea');
const htmlInput = mainSection.querySelector('textarea[data-html]');
const cssInput = mainSection.querySelector('textarea[data-css]');
const jsInput = mainSection.querySelector('textarea[data-js]');

const iframe = mainSection.querySelector('iframe');
const iframeHead = iframe.contentWindow.document.querySelector('head');
const iframeBody = iframe.contentWindow.document.querySelector('body');
const iframeStyle = iframe.contentWindow.document.createElement('style');
iframeHead.appendChild(iframeStyle);

setSectionsVisibility(navbarTabs);
navbarTabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        toggleSection(event)
    })
})
codeInputs.forEach(input => {
    input.addEventListener('input', updateOutput)
})
updateOutput();

/* FUNCTIONS */

function setSectionsVisibility(navbarTabsArray) {
    navbarTabsArray.forEach(tab => {
        const sectionId = tab.getAttribute('data-section-id');
        const section = mainSection.querySelector(`section[data-section-id="${sectionId}"]`)
        if (tab.hasAttribute('data-active')) {
            section.style.visibility = 'visible';
            section.style.position = 'unset';
        } else {
            section.style.visibility = 'hidden';
            section.style.position = 'absolute';
        }
    })
}

function toggleSection(event) {
    const tab = event.target;
    tab.toggleAttribute('data-active');
    setSectionsVisibility([tab]);
}

function updateOutput() {
    iframeStyle.textContent = cssInput.value;
    iframeBody.innerHTML = htmlInput.value;
    iframe.contentWindow.eval(jsInput.value);
}