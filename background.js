chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: '1688'
    })
})

chrome.action.onClicked.addListener(async (tab) => {
    const pre = await chrome.action.getBadgeText({tabId: tab.id})
    const next = pre === '1688' ? '1688' : '1688'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: next
    })
    if (next === '1688') {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ['jquery.js','content.js','popup.js']
        })
    }
})