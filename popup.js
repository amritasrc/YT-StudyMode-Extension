const toggle = document.getElementById("toggle");

chrome.storage.sync.get("enabled", (data) => {
    const enabled = data.enabled ?? true;
    toggle.checked = enabled;
    updateUI(enabled);
});

toggle.addEventListener("change", () => {
    const newState = toggle.checked;

    chrome.storage.sync.set({ enabled: newState }, () => {
        updateUI(newState);
    });
});

function updateUI(enabled) {
    const status = document.getElementById("status");
    status.textContent = enabled
        ? "Focus mode is active"
        : "Distractions are allowed";
}