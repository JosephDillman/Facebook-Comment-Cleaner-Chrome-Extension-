// Set default slider and autoDelete and minWord values from storage
var percent = document.getElementById("percentSlider");
var output = document.getElementById("output");
var autoDelete = document.getElementById("autoDelete");
var minWords = document.getElementById("minWords");
chrome.storage.sync.get(function(data) {
    percent.value=data.percent;
    output.innerText = data.percent;
    autoDelete.checked=data.autoDelete;
    setTheme(data.autoDelete);
    minWords.value=data.minWords;
});

var grad = document.querySelector("html");
function setTheme(set) {
    if (set) {
        grad.style.background = "linear-gradient(to bottom right,rgb(222, 202, 202), rgb(180, 241, 255))";
    }else{
        grad.style.background = "linear-gradient(to bottom right,rgb(199, 255, 219), rgb(180, 241, 255))";
    }
}

// Updating slider and autoDelete will save to storage
percentSlider.onchange = function() {
    chrome.storage.sync.set({"percent": percent.value});
}
percentSlider.oninput = function() {
    output.innerText = percent.value;
}
autoDelete.onchange = function(element) {
    chrome.storage.sync.set({"autoDelete": this.checked});
    setTheme(this.checked);
}
minWords.onchange = function() {
    var set = minWords.value;
    if (minWords.value < 0) {
        set = 0;
    }else if (minWords.value > 1000) {
        set = 1000;
    }
    chrome.storage.sync.set({"minWords": set});
}

// Delete/restore buttons will send message to content.js
var deleteComments = document.getElementById("deleteComments");
deleteComments.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "delete"});
    });
}
var restoreComments = document.getElementById("restoreComments");
restoreComments.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"message": "restore"});
    });
}
