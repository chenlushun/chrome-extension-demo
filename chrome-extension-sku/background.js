chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: 'sku'
    })
})

chrome.action.onClicked.addListener(async (tab) => {
    const pre = await chrome.action.getBadgeText({tabId: tab.id})
    const next = pre === 'sku' ? 'sku' : 'sku'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: next
    })
    if (next === 'sku') {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ['jquery.js','content.js']
        })
    }
})