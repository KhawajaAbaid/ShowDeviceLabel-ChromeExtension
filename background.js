chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // console.log("yayyyyyyyyyyyyyy");
    // console.log(tab.url);
    const result = /.*twitter\.com\/.*\/status\/.*/.test(tab.url);
    if (tab.url && result)
    {
        const userName = tab.url.split("/")[3]; // todo: implement regex
        const tweetId = tab.url.split("/status/")[1];
        // console.log(userName);
        
        console.log("sending message");
        chrome.tabs.sendMessage(tabId, {
            type:"NEW",
            userName: userName,
            tweetId: tweetId,
        });
    }
});