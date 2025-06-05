const autoSkipAds = () => {
  // Skip video ads
  const skipButton = document.querySelector('.ytp-ad-skip-button.ytp-button');
  if (skipButton) {
    skipButton.click();
    console.log("⏩ Auto-skipped!");
  }

  // Hide ad overlays
  const adSelectors = [
    '.ytp-ad-overlay-container',
    '.ytp-ad-module',
    '.ad-showing',
    '#player-ads',
    '.video-ads',
    '.ytp-ad-player-overlay',
    'ytd-display-ad-renderer',
    'ytd-promoted-video-renderer',
    'ytd-companion-slot-renderer'
  ];

  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = 'none';
    });
  });
};

const startAdSkipLoop = () => {
  setInterval(autoSkipAds, 1000);
};

const checkIfEnabledAndRun = () => {
  chrome.storage?.local.get(["adBlockEnabled"], (result) => {
    const isEnabled = result.adBlockEnabled ?? true; // default to true
    if (isEnabled) {
      startAdSkipLoop();
    } else {
      console.log("🛑 Ad blocker is turned OFF by user.");
    }
  });
};

// Delay the loop start slightly so YouTube has time to render stuff
window.addEventListener("load", () => {
  console.log("🔁 Starting ad skipper loop...");
  startAdSkipLoop();
});
