# 📚 YouTube Study Mode (Chrome Extension)

A minimal Chrome extension that removes distractions from YouTube and turns it into a focused learning environment.

## 🚀 Features

- ❌ Hides homepage feed  
- ❌ Removes recommended videos (sidebar)  
- ❌ Blocks Shorts  
- ❌ Hides comments  
- ✅ Keeps search and video playback intact  
- 🎛 Toggle Study Mode ON/OFF from popup  

## 🧠 How It Works

The extension uses a simple approach:

1. Adds a `study-mode` class to the page  
2. Uses CSS to hide distracting elements  
3. Stores toggle state using Chrome storage  
4. Reacts to YouTube navigation (SPA behavior)

---

## ⚙️ Installation (Manual)

1. Clone or download this repo  
2. Open Chrome and go to:
   chrome://extensions/
3. Enable **Developer Mode** (top right)  
4. Click **Load unpacked**  
5. Select the project folder  

---

## 🎯 Usage

1. Open YouTube  
2. Click the extension icon  
3. Toggle **Study Mode ON**  

✔ Homepage becomes clean  
✔ Distractions disappear  
✔ Only learning remains  

---

## 🧪 Tech Used

- Chrome Extension Manifest V3  
- JavaScript (DOM manipulation + storage API)  
- CSS (UI + element hiding)  

---
