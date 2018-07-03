let thumbCheckbox = document.getElementById("hide-thumb");
let videoCheckbox = document.getElementById("hide-video");

thumbCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({thumb: thumbCheckbox.value});
    onCheckChange('thumb');
});
videoCheckbox.addEventListener('change', () => {
    chrome.storage.sync.set({video: videoCheckbox.value});
    onCheckChange('video');
});

function onCheckChange(type) {
    chrome.storage.sync.get(type, function (value) {
        if (value) {
            addStylesheet(type);
        } else {
            removeStylesheet(type)
        }
    });
}

function addStylesheet(type) {
    chrome.tabs.executeScript({
        code: `    
            let link = document.getElementById("${type}-hider");
            if (!link) {
                link = document.createElement("link");
                link.id = "${type}-hider";
                link.href = "hide_${type}.css";
                link.type = "text/css";
                link.rel = "stylesheet";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
            `
        })
}

function removeStylesheet(type) {
    chrome.tabs.executeScript({
        code: `
        let link = document.getElementById("${type}-hider");
        if (link) {
            link.remove();
        }
        `
    })
}

onCheckChange('thumb');
onCheckChange('video');


