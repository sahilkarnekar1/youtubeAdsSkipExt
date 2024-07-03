setInterval(() => {
    var skipButton = document.getElementsByClassName("ytp-skip-ad-button");
    if (skipButton != undefined && skipButton.length > 0) {
        console.log("Ad detected");
        skipButton[0].click();
    }
}, 1000);