

var buttonCollection = document.querySelectorAll(".buttonRef")
for(var i = 0;i < buttonCollection.length;i++) {
        buttonCollection[i].addEventListener("click",function() {
        var active = document.querySelector(".activeButton")
        active.classList.remove("activeButton")
        buttonCollection[i].classList.add("activeButton")
    });
};

var tvChannelBlock = document.querySelector(".TvChannelBlock")
var blockCount = new Array(53);
for(var o = 0;o < blockCount.length;o++) {
    var parentChild = document.createElement("div")
    parentChild.className = "parentChild"
    parentChild.innerHTML = "<p class=channelsChild><img class=imgTv /></p>" + "<p class=text >Матч футбол " + o +"</p>"
    var img = parentChild.querySelector(".imgTv")
    img.src = "../images/channelImgTV.png"
    tvChannelBlock.appendChild(parentChild);
};

var config = {
    url: 'http://fcf2e861.ucomist.net/iptv/CB5F2GMTR7SUDF/11007/index.m3u8',
    player: document.getElementById('av-player'),
    controls: document.querySelector('.video-controls'),
    info: document.getElementById('info'),
};


var player = new VideoPlayer(config);
player.open(config.url);
console.log(player)




















