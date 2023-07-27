function transformUrl() {
    var inputUrl = document.getElementById("inputUrl").value;
    var outputUrl = document.getElementById("outputUrl");
    var copiedAlert = document.getElementById("copiedAlert");
    var urlAlert = document.getElementById("urlAlert");

    if(inputUrl.includes("vxtiktok.com")) {
        outputUrl.value = "";
        copiedAlert.className = "alert alert-hidden";
        showUrlAlert("URL already converted!");
    } else if(inputUrl.includes("tiktok.com")) {
        var newUrl = inputUrl.replace("tiktok.com", "vxtiktok.com");
        outputUrl.value = newUrl;
        copiedAlert.className = "alert alert-hidden";
        urlAlert.className = "alert alert-hidden";
    } else {
        outputUrl.value = "";
        copiedAlert.className = "alert alert-hidden";
        showUrlAlert("Invalid TikTok URL or No URL Detected!");
    }
}

function copyToClipboard() {
    var outputUrl = document.getElementById("outputUrl");
    var copiedAlert = document.getElementById("copiedAlert");
    var urlAlert = document.getElementById("urlAlert");

    if(outputUrl.value === '' || outputUrl.value === 'Invalid TikTok URL' || outputUrl.value === 'URL already converted!') {
        showUrlAlert('No URL Detected!');
    } else {
        outputUrl.select();
        document.execCommand("copy");
        showCopiedAlert();
    }
}

function showCopiedAlert() {
    var copiedAlert = document.getElementById("copiedAlert");
    copiedAlert.className = "alert alert-visible";
    setTimeout(function() {
        copiedAlert.className = "alert alert-hidden";
    }, 3000); // Hide the alert after 3 seconds
}

function showUrlAlert(message) {
    var urlAlert = document.getElementById("urlAlert");
    urlAlert.textContent = message;
    urlAlert.className = "alert alert-visible";
    setTimeout(function() {
        urlAlert.className = "alert alert-hidden";
    }, 3000); // Hide the alert after 3 seconds
}
