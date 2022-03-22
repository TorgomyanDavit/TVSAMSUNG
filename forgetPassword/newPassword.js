var forgetPassword = document.querySelector(".forgetPassword")
var changingInput = document.querySelectorAll(".changingInput")
var confirmButton = document.querySelector(".confirmnewPassword")



forgetPassword.addEventListener("submit",function(e) {
    e.preventDefault()
})



var numberOfKey = null
document.addEventListener("keydown",function(event) {
    changingInput[0].classList.remove("inputSearchHover")
    changingInput[1].classList.remove("inputSearchHover")
    confirmButton.classList.remove("hoverLinkForButton")

    if(numberOfKey === null) {
        numberOfKey = 1
    } else if((event.keyCode === 37 || event.keyCode === 38) && numberOfKey > 1 && "BODY" === document.activeElement.tagName) {
        numberOfKey--
    } else if((event.keyCode === 39  || event.keyCode === 40) && numberOfKey < 3 && "BODY" === document.activeElement.tagName) {
        numberOfKey++
    } 
    
    if(numberOfKey === 1) {
        changingInput[0].classList.add("inputSearchHover")
    } else if(numberOfKey === 2) {
        changingInput[1].classList.add("inputSearchHover")
    }  else if(numberOfKey === 3) {
        confirmButton.classList.add("hoverLinkForButton")
    }


    
    if(("INPUT" === document.activeElement.tagName && event.keyCode === 65376) || (event.keyCode === 38 || event.keyCode === 40)) {
        for(var i = 0;i < changingInput.length;i++) {
            changingInput[i].blur()
        }
    }
   
    if(event.keyCode === 13 && numberOfKey === 0) {
        localStorage.setItem("booline", true);
        window.location.href = "../userPage/user.html";
    } else if(event.keyCode === 13 && numberOfKey === 1) {
        if("INPUT" === document.activeElement.tagName) {
            changingInput[0].blur()
        } else {
            changingInput[0].focus()
        }
    } else if(event.keyCode === 13 && numberOfKey === 2) {
        if("INPUT" === document.activeElement.tagName) {
            changingInput[1].blur()
        } else {
            changingInput[1].focus()
        }
    }  else if(event.keyCode === 13 && numberOfKey === 3) {
        window.location.href = "../signInPage/signIn.html";
    }
    
})




