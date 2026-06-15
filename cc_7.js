// Use DOM API to select input, button, and cta <h2>
const headlineInput = document.getElementById('headline-input');
const updateButton = document.getElementById('update-button');
const ctaHeadline = document.getElementById('cta-headline');

// Add event listener to button to update the CTA headline
updateButton.addEventListener("click", function () {

    const newHeadline = headlineInput.value;

    if (newHeadline.trim() !== "") {
        ctaHeadline.textContent = newHeadline;
        headlineInput.value = "";
    }
});