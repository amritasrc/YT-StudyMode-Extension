function applyStudyMode(enabled) {
    if (!enabled) {
        document.documentElement.classList.remove("study-mode");
        return;
    }

    document.documentElement.classList.add("study-mode");
}

function run() {
    chrome.storage.sync.get("enabled", (data) => {
        applyStudyMode(data.enabled ?? true);
    });
}

function hookNavigation() {
    window.addEventListener("yt-navigate-finish", run);

    let lastUrl = location.href;

    new MutationObserver(() => {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            run();
        }
    }).observe(document, { subtree: true, childList: true });
}

run();
hookNavigation();

chrome.storage.onChanged.addListener(run);