const ATTRIBUTE_LIST = ['thumb', 'video', 'icon'];

const HIDE_ATTRIBUTE = {
    thumb: {
        element: document.getElementById("hide-thumb")
    },
    video: {
        element: document.getElementById("hide-video")
    },
    icon: {
        element: document.getElementById("hide-icon")
    }
}

const allButton = document.getElementById("control-all");

function detectUnchecked() {
    return ATTRIBUTE_LIST.some((key) => {
        return !HIDE_ATTRIBUTE[key].element.checked
    })
}

function setButton() {
    const unchecked = detectUnchecked();

    allButton.innerHTML = unchecked ? 'Select All' : 'Remove All';
    allButton.dataset.role = unchecked ? 'select' : 'remove';
}

chrome.storage.sync.get(ATTRIBUTE_LIST, function(result) {
    ATTRIBUTE_LIST.forEach((key) => {
        const element = HIDE_ATTRIBUTE[key].element;

        element.checked = result[key];
        element.addEventListener('change', (e) => {
            chrome.storage.sync.set({[key]: e.target.checked});
            setButton();
        })
    })

    setButton();
});

allButton.addEventListener('click', (e) => {
    const isSelect = allButton.dataset.role === 'select';
    const storeObject = {}

    ATTRIBUTE_LIST.forEach((key) => {
        HIDE_ATTRIBUTE[key].element.checked = isSelect;
        storeObject[key] = isSelect
    })

    chrome.storage.sync.set(storeObject);
    setButton();
})