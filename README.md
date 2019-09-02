# Facebook Comment Cleaner (Chrome Extension)
![header](https://raw.githubusercontent.com/JosephDillman/Facebook-Comment-Cleaner-Chrome-Extension-/master/screenshots/promos3.png)

The Facebook Comment Cleaner allows users to cleanse their newsfeed by hiding comments which primarily contain tagged friends or contain few words. This makes funny/interesting/useful comments easier to identify, especially in comment sections where sorting by relevance is not an option. The "cleaning" process may be accomplished in the following ways.

Automatic cleaning: 
When enabled, comments are cleaned according to settings on page load, and any new comments loaded afterwards are automatically targeted and removed.

Manual cleaning: 
Users may use buttons in the menu or hotkeys (alt+x, alt+z) to clean comments or restore previously cleaned comments according to settings. This manual option may be used with or without automatic cleaning enabled.

![demo](https://github.com/JosephDillman/Facebook-Comment-Cleaner-Chrome-Extension-/blob/master/screenshots/Showoff3%20(1).gif?raw=true)

### Install from Chrome Store
https://chrome.google.com/webstore/detail/facebook-comment-cleaner/anjhgljmglhdjihjfbjlmelghebclioo

### Important Files
## content.js
  - Loading preferences from chrome storage
  - Locating and hiding comments based on preferences
  - Hotkey functions
  - DOM observation for reacting to newly loaded comments
 
 ## interact.js
  - Slider, buttons, other inputs logic
  - Storing preferances to chrome storage
  - Message passing to content.js
  
 ## interact.html + w3schools.css
  - popup window for extension
  
 ![screenshot](https://raw.githubusercontent.com/JosephDillman/Facebook-Comment-Cleaner-Chrome-Extension-/master/screenshots/screenshot.png)

  


