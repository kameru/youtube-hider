let thumbCheckbox = document.getElementById("hide-thumb");
let videoCheckbox = document.getElementById("hide-video");

thumbCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({thumb: thumbCheckbox.checked});
});
videoCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({video: videoCheckbox.checked});
});
