const ATTRIBUTE_LIST = ['thumb', 'video', 'icon'];

function onCheckChange(type, value) {
    if (value) {
        addStylesheet(type);
    } else {
        removeStylesheet(type)
    }
}

let link = '';

function addStylesheet(type) {
    link = document.getElementById(type + '-hider');
    if (!link) {
        link = document.createElement("link");
        link.id = `${type}-hider`;
        link.href = chrome.extension.getURL(`hide_${type}.css`);
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}

function removeStylesheet(type) {
    link = document.getElementById(`${type}-hider`);
    if (link) {
        link.remove();
    }
}

chrome.storage.sync.get(ATTRIBUTE_LIST, function(result) {
    ATTRIBUTE_LIST.forEach((key) => {
        onCheckChange(key, result[key]);
    })
});


chrome.storage.onChanged.addListener(function (changes) {
   for (let type in changes) {
       let value = changes[type].newValue;
       onCheckChange(type, value);
   }
});