chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: 'OFF'
    });
});

const website1 = "https://wordleunlimited.org"
const website2 = "https://www.nytimes.com/games/wordle/index.html";
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(website1) || tab.url.startsWith(website2)) {
        const prevState = await chrome.action.getBadgeText({tabId: tab.id});
        const nextState = prevState == 'ON' ? 'OFF' : 'ON';
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState
        });

        if (nextState === 'ON') {
            console.log("here");
            if (tab.url.startsWith(website1)) {
                await chrome.scripting.executeScript({
                    files: ['solve.js'],
                    target: { tabId: tab.id }
                });
            } else {
                await chrome.scripting.executeScript({
                    files: ['solve2.js'],
                    target: { tabId: tab.id }
                });
            }
        } 
    }
});