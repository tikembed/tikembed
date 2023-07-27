function transformUrl() {
    var inputUrl = document.getElementById("inputUrl").value;
    if(inputUrl.includes("tiktok.com")) {
        var newUrl = inputUrl.replace("tiktok.com", "vxtiktok.com");
        document.getElementById("outputUrl").value = newUrl;
    } else {
        document.getElementById("outputUrl").value = "Invalid TikTok URL";
    }
}

function copyToClipboard() {
    var outputUrl = document.getElementById("outputUrl");
    outputUrl.select();
    document.execCommand("copy");

    var copiedAlert = document.getElementById("copiedAlert");
    copiedAlert.className = "alert-visible";
    setTimeout(function() {
        copiedAlert.className = "alert-hidden";
    }, 2000); // Hide the alert after 2 seconds
}
