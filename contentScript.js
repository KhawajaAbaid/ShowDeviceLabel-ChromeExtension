(() => {
    // console.log("HEYYYYYYYYYYYYYYYYYYYY");
    // global variables
    let tweetId_ = "";
    let userName_ = "";

    console.log("Content Script: adding listener ");
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, userName, tweetId } = obj;

        if (type === "NEW"){
            newTweetLoaded();
        }
    });
    

    const newTweetLoaded = () => {
            // stole this code from https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
            // because the dom wasn't ready when we would run newTweetLoaded which would result
            // in selecting no element, or null and hence error.
        const isElementLoaded = async selector => {
            while ( document.querySelector(selector) === null) {
                await new Promise( resolve =>  requestAnimationFrame(resolve) )
            }
            return document.querySelector(selector);
            };
        // I'm checking for a specific class .file-item and then running code. You can also check for an id or an element.
        isElementLoaded("div[dir='ltr'] div a").then((selector) => {
            // Run code here.
            // console.log("it's loaded omg it's loaded");
            const deviceLabelExists = document.getElementsByClassName("device-label")[0];
            // console.log(deviceLabelExists)
            
            if (!deviceLabelExists){
                // console.log("Okay lets add the label!")
                const deviceLabelElement = document.createElement("span");
                deviceLabelElement.innerHTML = " · Twitter for iPhone";
                deviceLabelElement.className = "device-label";
                // console.log(deviceLabelElement);
                const tweetMetaData = document.querySelector("div[dir='ltr'] div a");
                // console.log(tweetMetaData);
                tweetMetaData.append(deviceLabelElement);
            }
        });
    };
    newTweetLoaded();
})();