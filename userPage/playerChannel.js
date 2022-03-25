var videoconteiner = document.querySelector(".videoconteiner")
var backButton = document.querySelector(".backButton")
var play = document.querySelector(".play")
var next = document.querySelector(".next")
var channel = document.querySelector(".prev")
var sourceButton = document.querySelector(".sourceButton")
var slack = document.querySelectorAll(".slack")
var mainPageSizerDiv = document.querySelector(".mainPageSizerDiv");








var keyPlayer = null
var channelType = 0
var myTimeout = -1



window.onload = function () {

    // function start() {
    //     tizen.tvinputdevice.registerKey('MediaPlay', 'MediaPause','MediaStop','MediaFastForward','MediaRewind');
    //     webapis.avplay.open("http://fcf2e861.ucomist.net/iptv/CB5F2GMTR7SUDF/11007/index.m3u8");
    //     webapis.avplay.setDisplayRect(0,0,1920,1080);
    // }
    // start()


    document.addEventListener("keydown",function(event) {



        if(videoconteiner.style.display === "block") {
            sourceButton.classList.add("playButtonHover")
            if(myTimeout !== -1) { clearTimeout(myTimeout); }
            myTimeout = setTimeout(function() { sourceButton.classList.remove("playButtonHover");keyPlayer = 3},2000)
    
    
    
            if(sourceButton.classList.contains("playButtonHover"))  {
                for(var i = 0;i < slack.length;i++) {
                    backButton.classList.remove("backButtonHover")+
                    slack[i].classList.remove("hoverSlack")
                }
                if(keyPlayer === null) {
                    keyPlayer = 0
                } else if((event.keyCode === 37 || event.keyCode === 38) && keyPlayer > 1) {
                    keyPlayer--
                } else if((event.keyCode === 39 || event.keyCode === 40) && keyPlayer < 4) {
                    keyPlayer++
                }
    
    
                if(keyPlayer === 1) {
                    backButton.classList.add("backButtonHover")
                } else if(keyPlayer === 2) {
                    slack[0].classList.add("hoverSlack")
                } else if(keyPlayer === 3) {
                    slack[1].classList.add("hoverSlack")
                } else if(keyPlayer === 4) {
                    slack[2].classList.add("hoverSlack")
                } 
                 
                // if(event.keyCode === 461)
        
                if(event.keyCode ===  13 && keyPlayer === 1 && localStorage.getItem('pathName') === "true") {
                    webapis.avplay.stop()
                    childPlaylist.style.display = "block"
                    menyu.style.display = "block"
                    notification.style.display = "block"
                    videoconteiner.style.display = "none"
                    keyPlayer = 0
                    localStorage.removeItem('pathName');
                } 
                
                else if(event.keyCode ===  13 && keyPlayer === 1 && localStorage.getItem('pathName') !== "true") {
                    webapis.avplay.stop()
                    mainPageSizerDiv.style.display = "block"
                    menyu.style.display = "block"
                    notification.style.display = "block"
                    videoconteiner.style.display = "none"
                    keyPlayer = 0
                } 
                
                else if(event.keyCode === 13 && keyPlayer === 2) {
                    if(channelType > 0) {
                        channelType--
                    }
                    for(var i5 = 0;i5 < parentChild.length;i5++) {
                        if(i5 === channelType) {
                            var filmUrl = parentChild[i5].getAttribute("data-src")
                            webapis.avplay.stop()
                            webapis.avplay.open(filmUrl);
                            webapis.avplay.prepare();                
                            webapis.avplay.play();
                        }
                    }
                } 
                
                else if(event.keyCode ===  13 && keyPlayer === 3) {
                    if(webapis.avplay.getState() === 'PAUSED') {
                        play.children[0].classList.toggle("playIcon")
                        play.children[1].classList.toggle("playIcon")
                        webapis.avplay.play()
                    } else if(webapis.avplay.getState() === 'PLAYING') {
                        play.children[1].classList.toggle("playIcon")
                        play.children[0].classList.toggle("playIcon")
                        webapis.avplay.pause()
                    }
                } 
                
                else if(event.keyCode ===  13 && keyPlayer === 4) {
                    if(channelType < parentChild.length - 1) {
                        channelType++
                    }
                    for(var i5 = 0;i5 < parentChild.length;i5++) {
                        if(i5 === channelType) {
                            var filmUrl = parentChild[i5].getAttribute("data-src")
                            webapis.avplay.stop()
                            webapis.avplay.open(filmUrl);
                            webapis.avplay.prepare();                
                            webapis.avplay.play();
                        }
                    }
                }  
                
                else if(event.keyCode === 65) {
                    if(channelType > 0) {
                        channelType--
                    }
                    for(var i5 = 0;i5 < parentChild.length;i5++) {
                        if(i5 === channelType) {
                            play.children[0].classList.add("playIcon")
                            play.children[1].classList.remove("playIcon")
                            var filmUrl = parentChild[i5].getAttribute("data-src")
                            webapis.avplay.stop()
                            webapis.avplay.open(filmUrl);
                            webapis.avplay.prepare();                
                            webapis.avplay.play();
                        }
                    }
                } 
                
                else if(event.keyCode === 33) {
                    if(channelType < parentChild.length - 1) {
                        channelType++
                    }
                    for(var i5 = 0;i5 < parentChild.length;i5++) {
                        if(i5 === channelType) {
                            play.children[0].classList.add("playIcon")
                            play.children[1].classList.remove("playIcon")
                            var filmUrl = parentChild[i5].getAttribute("data-src")
                            webapis.avplay.stop()
                            webapis.avplay.open(filmUrl);
                            webapis.avplay.prepare();                
                            webapis.avplay.play();
                        }
                    }
                } 
            }
    
        }
        
    
    })
}




// function play() {
//     if (webapis.avplay.getState() === 'IDLE') {
//         webapis.avplay.prepare();                
//         webapis.avplay.play();
//     } else if(webapis.avplay.getState() === 'PAUSED'){
//         webapis.avplay.play();
//     } else if(webapis.avplay.getState() === 'PLAYING') {
//         webapis.avplay.pause();
//     }  
// }