var button1 = document.querySelectorAll(".button1");
var Xbutton = document.querySelector(".Xbutton");
var buttonDiv = document.querySelector(".colorButton");
var chooseField = document.querySelector(".chooseField");
var liveChannelType = document.querySelectorAll(".live");
var channelsChild = document.querySelectorAll(".channelsChild");
var inputSearch = document.querySelector(".inputSearch");
var iconDivMenu = document.querySelectorAll(".iconDivMenu");
var menyu = document.querySelector(".menyu");
var notification = document.querySelector(".notification");
var miniDivMenyu = document.querySelectorAll(".miniDivMenyu");
var slackPosition = document.querySelectorAll(".slackPosition");
var mainPageSizerDiv = document.querySelector(".mainPageSizerDiv");
var parentChild = document.querySelectorAll(".parentChild");
var video = document.getElementById('myVideo');
var channels = document.querySelector(".channels");
localStorage.removeItem('pathName');

updateUserPage(sessionStorage.getItem("authenticated"),function(data) {
    alert(data)
    var ChannelBlock = document.querySelector(".channels")
    var blockCount = data.tariffType[0].bouquet_id[0].bouquet_channels;
    
    console.log(data);
    for(var oo = 0;oo < blockCount.length;oo++) {
        var Child = document.createElement("div")
        Child.className = "parentChild"
        Child.innerHTML = "<p class=channelsChild data-src="+blockCount[oo].stream_source[0]+" ><img class=imgTv src=../images/channelImgTV.png /></p>" + "<p class=text >"+ blockCount[oo].stream_display_name +"</p>"
        var img = Child.querySelector(".imgTv")
        img.src = ""+blockCount[oo].stream_icon+""
        ChannelBlock.appendChild(Child);
    };
    parentChild = document.querySelectorAll(".channelsChild");
    channelsChild = document.querySelectorAll(".channelsChild");
});

if(localStorage.getItem("openPopup") === "true") {
    chooseField.style.display = "";
} else {
    chooseField.style.display = "none";
}

var numberOfMainKey = null
var numberSlider = null
var leftSlider = 0
document.addEventListener("keydown",function(event) {
    if(videoconteiner.style.display !== "block") {
        if(chooseField.style.display === "") {
            Xbutton.classList.remove("EmulatorhoverXButton");
            buttonDiv.classList.remove("emulatorScaleButton");
            if(numberOfMainKey === null) {
                numberOfMainKey = 1
            } else if((event.keyCode === 38 || event.keyCode === 37) && numberOfMainKey > 0) {
                numberOfMainKey--
            } else if((event.keyCode === 40  || event.keyCode === 39) && numberOfMainKey < 1) {
                numberOfMainKey++
            } else if(event.keyCode !== 13) {
                numberOfMainKey = null
            }
    
            // hover thing
            if(numberOfMainKey === 0) {
                Xbutton.classList.add("EmulatorhoverXButton");
            } else if(numberOfMainKey === 1) {
                buttonDiv.classList.add("emulatorScaleButton");
            }
    
            // click to thing
            if(event.keyCode === 13 && numberOfMainKey === 0 && button1[0].classList.contains("activeButton")) {
                localStorage.removeItem("openPopup");
                chooseField.style.display = "none"
                numberOfMainKey = 0
            } else if(event.keyCode === 13 && numberOfMainKey === 0 && button1[1].classList.contains("activeButton")) {
                localStorage.removeItem("openPopup");
                window.location.href = "../userPage/user.html"
            }  else if(event.keyCode === 13 && numberOfMainKey === 1) {
                if(button1[0].classList.contains("activeButton")) {
                    button1[0].classList.remove("activeButton");
                    button1[1].classList.add("activeButton");
                    buttonDiv.classList.add("activeColorButton");
                } else {
                    button1[1].classList.remove("activeButton");
                    button1[0].classList.add("activeButton");
                    buttonDiv.classList.remove("activeColorButton");
                }
            } 
    
        } else if ((event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) && numberOfMainKey <= -1 && (notification.style.right === "-464px" || notification.style.right === "")) {
           
            if(numberOfMainKey < -1) {
                for(var t = 0;t < iconDivMenu.length;t++) {
                    iconDivMenu[t].classList.remove("activeHover")
                }
            }
    
         
            inputSearch.classList.remove("inputSearchHover");
            liveChannelType[0].classList.remove("hoverLive");
            if((event.keyCode === 37) && numberOfMainKey === -1 && numberOfMainKey > -5) {
                numberOfMainKey = -2
            } else if(event.keyCode === 39 && numberOfMainKey === -2) {
                numberOfMainKey = -1
            } else if(event.keyCode === 40 && numberOfMainKey > - 6 && numberOfMainKey < -1) {
                numberOfMainKey--
            } else if(event.keyCode === 40 && numberOfMainKey === -1) {
                liveChannelType[0].classList.add("hoverLive")
                numberOfMainKey++
            } else if(event.keyCode === 38 && numberOfMainKey < -2) {
                numberOfMainKey++
            } else if(event.keyCode === 39 && (numberOfMainKey === -3 || numberOfMainKey === -4 || numberOfMainKey === -5)) {
                numberOfMainKey = 0
            }
    
            // if(numberOfMainKey === -6) {
            //     numberOfMainKey = -4
            // }
            // hover Menyu
            if(numberOfMainKey === 0) {
                liveChannelType[0].classList.add("hoverLive")
            } else if(numberOfMainKey === -1) {
                inputSearch.classList.add("inputSearchHover")
            } else if(numberOfMainKey === -2 ) {
                iconDivMenu[0].classList.add("activeHover")
            } else if(numberOfMainKey === -3 ) {
                iconDivMenu[1].classList.add("activeHover")
            } else if(numberOfMainKey === -4 ) {
                iconDivMenu[2].classList.add("activeHover")
            }  else if(numberOfMainKey === -5 ) {
                iconDivMenu[3].classList.add("activeHover")
            }  else if(numberOfMainKey === -6 ) {
                iconDivMenu[4].classList.add("activeHover")
            }  
    
        } else if(event.keyCode === 13 && numberOfMainKey < -1) {
            // submit button Men number 13
            if(numberOfMainKey === -2) {
                if(menyu.classList.contains("transformLeftMenyu")) {
                    for(var t1 = 0;t1 < slackPosition.length;t1++) {
                        slackPosition[t1].classList.remove("slackMenyu")
                    }
                    menyu.classList.remove("transformLeftMenyu")
                } else {
                    if(menyu.classList.contains("transformLeftMenyu")) {
                        for(var t1 = 0;t1 < slackPosition.length;t1++) {
                            slackPosition[t1].classList.add("slackMenyu")
                        }
                    }
                    menyu.classList.add("transformLeftMenyu")
                }
            } else if(numberOfMainKey === -4) {
                if(notification.style.right === "-464px" || notification.style.right === "") {
                    notification.style.right = "0px"
                    miniDivMenyu[2].classList.add("activeNoteforMenyu")
                    numberOfMainKey = -3
                    iconDivMenu[2].classList.remove("activeHover")
                }

            } else if(numberOfMainKey === -5) {
                window.location.href = "../settings/settings.html";
            } else if(numberOfMainKey === -6) {
                logauth(sessionStorage.getItem("authenticated"))
            }
            
        } else {
            // remove class
            if(notification.style.right === "-464px" || notification.style.right === "") {

                for(var j = 0;j < liveChannelType.length;j++) {
                    if(numberOfMainKey === j && numberOfMainKey !== 6) {
                        liveChannelType[j].classList.remove("hoverLive")
                    } else {
                        liveChannelType[j].classList.remove("hoverLink")
                    }
                }
        
                inputSearch.classList.remove("inputSearchHover")
                // remove focus
                for(var o = 0;o < channelsChild.length;o++) {
                    channelsChild[o].classList.remove("channelsChildfocus")
                    // channelsChild[o].blur()
                }
        
                // change numberOfMainKey value
                if((event.keyCode === 38 ) && numberOfMainKey >= 3 && numberOfMainKey !== -1) {
                    numberOfMainKey -= 3
                } else if((event.keyCode === 40 ) && numberOfMainKey < 6 && numberOfMainKey !== 4 && numberOfMainKey !== 5 && numberOfMainKey !== -1) {
                    numberOfMainKey += 3
                }else if(event.keyCode === 40 && (numberOfMainKey === 4 || numberOfMainKey === 5 || numberOfMainKey === 6) && numberOfMainKey !== -1) {
                    numberSlider = 0
                    numberOfMainKey = 7
                    for(var o = 0;o < channelsChild.length;o++) {
                        if(o === numberSlider) {
                            channelsChild[o].classList.add("channelsChildfocus")
                            // channelsChild[o].blur()
                        }
                    }
                } else if(event.keyCode === 37 && numberOfMainKey === 3 && (numberSlider === 0 || numberSlider === null)) {
                    iconDivMenu[1].classList.add("activeHover")
                    numberOfMainKey = -3
                } else if(event.keyCode === 37 && numberOfMainKey > 0 && (numberSlider === 0 || numberSlider === null)) {
                    numberOfMainKey --
                } else if(event.keyCode === 37 && numberOfMainKey === 0 && (numberSlider === 0 || numberSlider === null)) {
                    numberOfMainKey = -3
                    iconDivMenu[1].classList.add("activeHover")
                }  else if(event.keyCode === 39 && numberOfMainKey < 7) {
                    numberOfMainKey ++
                } else if(event.keyCode === 38 && (numberOfMainKey === 0 || numberOfMainKey === 1 || numberOfMainKey === 2)) {
                    numberOfMainKey = -1
                }
        
                /** add hover for type*/
                if(numberOfMainKey >= 0 && numberOfMainKey <= 6) {
                    for(var j = 0;j < liveChannelType.length;j++) {
                        if(numberOfMainKey === j && numberOfMainKey !== 6) {
                            liveChannelType[j].classList.add("hoverLive")
                        } else if(numberOfMainKey === j) {
                            liveChannelType[j].classList.add("hoverLink")
                        }
                    }
                }
        
                if(numberOfMainKey === -1) {
                    inputSearch.classList.add("inputSearchHover")
                }
        
                // logic slider
                if(numberSlider >= 0 && numberOfMainKey === 7) {
                    if(event.keyCode === 37 && numberSlider > 0 ) {
                        numberSlider--
                    } else if(event.keyCode === 39 && numberSlider < channelsChild.length - 1)  {
                        numberSlider++
                    } 
        
                    for(var o = 0;o < channelsChild.length;o++) {
                        if(o === numberSlider) {
                            channelsChild[o].classList.add("channelsChildfocus")
                        }
                    }
                } else if(event.keyCode === 37 && numberSlider === 0)  {
                    numberSlider = null
                } else if(event.keyCode === 38 && numberOfMainKey < 7)  {
                    numberSlider = null
                } 
        
                if(numberSlider >= 0 && numberOfMainKey === 7) {
                    if(numberSlider === 0) {
                        leftSlider = 0
                        channels.style.left = leftSlider + "px"
                    } else if(numberSlider > 2 && event.keyCode === 39 && numberSlider < channelsChild.length -1) {
                        leftSlider -= 242
                        channels.style.left = leftSlider + "px"
                    } else if(numberSlider > 1 && event.keyCode === 37) {
                        leftSlider += 242
                        channels.style.left = leftSlider + "px"
                    }
                }

                // click anyWher Logic
                if(numberOfMainKey === -1 && event.keyCode === 13) {
                    localStorage.setItem("booline", true);
                    window.location.href = "../userPage/user.html";
                } else if(numberOfMainKey === 0 && event.keyCode === 13) {
                    window.location.href = "../userPage/user.html";
                } else if(numberOfMainKey === 6 && event.keyCode === 13) {
                    window.location.href = "../userPage/user.html";
                } else if(numberOfMainKey === 3 && event.keyCode === 13) {
                    notification.style.right = "0px"
                    miniDivMenyu[2].classList.add("activeNoteforMenyu")
                    numberOfMainKey = -3
                    iconDivMenu[2].classList.remove("activeHover")
                    liveChannelType[3].classList.remove("hoverLive");
                    // window.location.href = "../screenPage/screen.html";
                } else if(numberOfMainKey === 4 && event.keyCode === 13) {
                    window.location.href = "../settings/settings.html";
                } else if(numberOfMainKey === 5 && event.keyCode === 13) {
                    logauth(sessionStorage.getItem("authenticated"))
                }

                /** Tv Player */
                if(event.keyCode ===  13 && numberOfMainKey === 7 && numberSlider !== null) {
                    mainPageSizerDiv.style.display = "none"
                    menyu.style.display = "none"
                    notification.style.display = "none"
                    videoconteiner.style.display = "block"
                    for(var i5 = 0;i5 < parentChild.length;i5++) {
                        if(i5 === numberSlider) {
                            var filmUrl = parentChild[i5].getAttribute("data-src")
                            // tizen.tvinputdevice.registerKey('MediaPlay', 'MediaPause','MediaStop','MediaFastForward','MediaRewind');
                            webapis.avplay.open(filmUrl);
                            webapis.avplay.setDisplayRect(0,0,1920,1080);
                            setTimeout(function() {
                                webapis.avplay.prepare();                
                                webapis.avplay.play();
                            },3000)
                        }
                    }
                }
            }
        }

        if(menyu.classList.contains("transformLeftMenyu")) {
            iconDivMenu[0].firstElementChild.style.display = "block"
            iconDivMenu[0].lastElementChild.style.display = "none"
        } else {
            iconDivMenu[0].firstElementChild.style.display = "none"
            iconDivMenu[0].lastElementChild.style.display = "block"
        }
    }
})  





