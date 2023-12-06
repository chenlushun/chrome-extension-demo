chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: 'detail'
    })
})

chrome.action.onClicked.addListener(async (tab) => {
    const pre = await chrome.action.getBadgeText({tabId: tab.id})
    const next = pre === 'detail' ? 'detail' : 'detail'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: next
    })
    if (next === 'detail') {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ['jquery.js','content.js']
        })
    }
})