const toggle = document.getElementById('toggleAdBlocker');

// Load saved value when popup opens
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(['adBlockEnabled'], (result) => {
    const isEnabled = result.adBlockEnabled ?? true; // default to ON
    toggle.checked = isEnabled;
  });
});

// Save new value when checkbox is clicked
toggle.addEventListener('change', () => {
  const newValue = toggle.checked;
  chrome.storage.local.set({ adBlockEnabled: newValue }, () => {
    console.log("✅ Ad Blocker set to:", newValue);
  });
});
