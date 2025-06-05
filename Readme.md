# 🚫 YouTube Ad Skipper – Chrome Extension

Skip the noise. Just watch.

## 🔥 Features

- ✅ Auto-clicks the "Skip Ad" button on YouTube
- 🚫 Hides overlay ads, banners, and sidebar promos
- 🟢 Toggle ON/OFF with a simple switch in the popup
- 📦 Lightweight & privacy-friendly (no tracking or external requests)



## 🛠 How It Works

- `rules.json`: Blocks known ad network requests using [Declarative Net Request API (MV3)](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/).
- `content.js`: Runs in the YouTube tab, auto-skips ads and hides UI clutter.
- `popup.html + popup.js`: Offers a toggle switch to enable/disable the ad blocker on demand.

---


## 💻 Installation (Dev Mode)

1. Download this repo as ZIP & unzip it.
2. Go to `chrome://extensions` in Chrome.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** → select the unzipped folder.
5. Done! Try it on any YouTube video.

---




## 🙋 FAQ

### Does this track users?
**Never.** No analytics, no trackers, no ads. 100% open-source.

### Will it block all ads?
Nope. It focuses only on **skippable video ads** and **overlay elements** on YouTube.

---

## 🤝 Contribution

Pull requests welcome. If you’ve got ideas like:
- Per-site toggle
- Ad count statistics
- Dark mode popup

Let’s build it together!

---

## 👨‍💻 Author

Built with caffeine and chaos by [Sarvesh Baranwal](https://github.com/serv-er).  
Shout out if it saves your brain cells from mid-roll hell.

---

## ⚠️ Disclaimer

This extension is for educational and personal use only.  
It may not be allowed by YouTube’s terms of service — use at your own discretion.

