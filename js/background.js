chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.onGithub === true) {
        chrome.browserAction.onClicked.addListener((tab) => {
            chrome.tabs.executeScript(null, { file: "js/github.js" });
        });
    }

    if (msg.onGitlab === true) {
        chrome.browserAction.onClicked.addListener((tab) => {
            chrome.tabs.executeScript(null, { file: "js/gitlab.js" });
        });
    }

    chrome.browserAction.setIcon({
        tabId: sender.tab.id,
        path: {
            "16": "assets/icon_16.png",
            "32": "assets/icon_32.png",
            "48": "assets/icon_48.png",
            "64": "assets/icon_64.png",
            "128": "assets/icon_128.png",
        }
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if (info.status === "loading") {
        chrome.browserAction.setIcon({
            path: {
                "16": "assets/disabled_icon_16.png",
                "32": "assets/disabled_icon_32.png",
                "48": "assets/disabled_icon_48.png",
                "64": "assets/disabled_icon_64.png",
                "128": "assets/disabled_icon_128.png",
            }
        });
        chrome.browserAction.setPopup({
            tabId: tabId,
            popup: ""
        });
    }
});
