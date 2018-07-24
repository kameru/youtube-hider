let thumbCheckbox = document.getElementById("hide-thumb");
let videoCheckbox = document.getElementById("hide-video");

chrome.storage.sync.get(['thumb', 'video'], function(result) {
    thumbCheckbox.checked = result.thumb;
    videoCheckbox.checked = result.video;
});

thumbCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({thumb: thumbCheckbox.checked});
});
videoCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({video: videoCheckbox.checked});
});
