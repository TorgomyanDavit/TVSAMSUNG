var Link = document.querySelectorAll(".linkRegSign")
var form = document.querySelector(".formSignIn")
var input = document.querySelectorAll(".passwordInpur")
var forgetPassword = document.querySelector(".forgetPassword")
var signInMainButton = document.querySelector(".signInMainButton")


form.addEventListener("submit",function(e) {
    e.preventDefault()
}) 

// for ok button keycode 13
// 37 left,38 arrowup,39 right,40 arrowdown
var numberOfKey = null
document.addEventListener("keydown",function(event) {
    // close open element
    if(event.keyCode === 10009 ) {
        window.history.back();
    }
    if(event.keyCode !== 8) {
        Link[0].classList.remove("hoverLink")
        Link[1].classList.remove("hoverLink")
        forgetPassword.classList.remove("hoverLink")
        signInMainButton.classList.remove("hoverLinkForButton")
        input[0].classList.remove("hoverInput")
        input[1].classList.remove("hoverInput")
    }
     
    // add key for any element
    if(numberOfKey === null) {
        numberOfKey = 3
    } else if((event.keyCode === 38 || event.keyCode === 37) && numberOfKey > 1 && "INPUT" !== document.activeElement.tagName) {
        numberOfKey--
    } else if((event.keyCode === 40  || event.keyCode === 39) && numberOfKey < 6  && "INPUT" !== document.activeElement.tagName) {
        numberOfKey++
    } else if(event.keyCode === 37 || event.keyCode === 39 && "INPUT" !== document.activeElement.tagName) {
        numberOfKey = null
    } 

    // hover thing
    if(numberOfKey === 3) {
        input[0].classList.add("hoverInput")
    } else if(numberOfKey === 1) {
        Link[0].classList.add("hoverLink")
    } else if(numberOfKey === 2) {
        Link[1].classList.add("hoverLink")
    } else if(numberOfKey === 4) {
        input[1].classList.add("hoverInput")
    } 
    // else if(numberOfKey === 5) {
    //     forgetPassword.classList.add("hoverLink")
    // } 
    else if(numberOfKey === 5) {
        signInMainButton.classList.add("hoverLinkForButton")
    } 

    if(("INPUT" === document.activeElement.tagName && event.keyCode === 65376) || (event.keyCode === 38 || event.keyCode === 40)) {
        for(var i = 0;i < input.length;i++) {
            input[i].blur() 
        }
    }
    // click to thing
    if(event.keyCode === 13 && numberOfKey === 1) {
        window.location.href = "../registerPage/register.html";
    } else if(event.keyCode === 13 && numberOfKey === 2) {
        window.location.href = "./signIn.html";
    } else if(event.keyCode === 13 && numberOfKey === 3) {
        if ("INPUT" === document.activeElement.tagName) { input[0].blur() } else { input[0].focus()}
    } else if(event.keyCode === 13 && numberOfKey === 4) {
        if ("INPUT" === document.activeElement.tagName) { input[1].blur() } else {  input[1].focus() }
    } 
    // else if(event.keyCode === 13 && numberOfKey === 5) {
    //     window.location.href = "../forgetPassword/forget.html";
    // } 
    else if(event.keyCode === 13 && numberOfKey === 5) {
        localStorage.setItem("openPopup",true)
        postSign_In()
    }
})

var postSign_In = function() {
    fetch(server+"/login", {
        mode: 'cors',
        method : "POST",
        credentials: "same-origin",
        headers : {'Content-Type' : 'application/json','Accept': 'application/json'},
        body : JSON.stringify({email:input[0].value,password:input[1].value})
    }).then(function(response) { return response.json()} )
    .then(function(response) {
        validation(response,input[0],input[1])
    })
}


















// sergemuradxanyan704@gmail.com








