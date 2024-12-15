const channel1Element = document.getElementById("channel_1");
const channel2Element = document.getElementById("channel_2");

const actions = [{
    key: ""
}]


const events = [{
    event: ''
}]

document.addEventListener("keydown", function(e) {
    console.log(e);   
})

/**
 * とりあえずChannel1に動画をロードする
 * @param {string} url
 */
function loadVideo(url) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    channel1Element.appendChild(iframe);
}

document.querySelector("#load-track").addEventListener("submit", function(e) {
    const url = e.target.querySelector("input").value;
    loadVideo(url);
})


document.addEventListener("message", function(e) {
    console.log(e);
    
})
