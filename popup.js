let thumbCheckbox = document.getElementById("hide-thumb");
let videoCheckbox = document.getElementById("hide-video");
let iconCheckbox = document.getElementById("hide-icon");

chrome.storage.sync.get(['thumb', 'video', 'icon'], function(result) {
    thumbCheckbox.checked = result.thumb;
    videoCheckbox.checked = result.video;
    iconCheckbox.checked = result.icon;
});

thumbCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({thumb: thumbCheckbox.checked});
});
videoCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({video: videoCheckbox.checked});
});

iconCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({icon: iconCheckbox.checked});
});
