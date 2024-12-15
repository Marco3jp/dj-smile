function startVideo() {
    document.querySelector("[data-part='context-trigger']").click()
}

function loadVideo() {
}

document.addEventListener("message", function(e) {
    console.log(e);

    // コマンドごとの分類はするけど一旦は置いておく
    startVideo();
})