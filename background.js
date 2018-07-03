chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({thumb: true});
    chrome.storage.sync.set({video: true});
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'www.youtube.com' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});