var signInbutton1 = document.querySelector(".button1")
var signInbutton2 = document.querySelector(".button2")
var imgParentLogo = document.querySelector(".imgParentLogo")

var descriptionHomePage = document.getElementById("descriptionHomePage")
var TitleHomePage = document.getElementById("TitleHomePage")

var getHomePage = function() {
    fetch(server+"/home").then(function(response) { return response.json()} )
    .then(function(response) {
        descriptionHomePage.innerText = response.home.description
        TitleHomePage.innerText = response.home.title
        console.log(response);
    });
}
getHomePage()


// for ok button keycode 13
// 37 left,38 arrowup,39 right,40 arrowdown
document.addEventListener("keydown",function(event) {
    // descriptionHomePage.innerText = event.keyCode
    if(event.keyCode === 10009) {
        tizen.application.getCurrentApplication().exit();
    }

    if((event.keyCode === 13) && signInbutton1.classList.contains("activebuttonhover")) {
        window.location.href = "./signInPage/signIn.html";
    } else if ((event.keyCode === 13) && signInbutton2.classList.contains("activebuttonhover")) {
        window.location.href = "./registerPage/register.html";
    }

    if(event.keyCode === 37 || event.keyCode === 38) {
        signInbutton2.classList.remove("activebuttonhover");
        signInbutton1.classList.add("activebuttonhover");
    } else if(event.keyCode === 39) {
        signInbutton1.classList.remove("activebuttonhover");
        signInbutton2.classList.add("activebuttonhover");
    } else if(event.keyCode === 40) {
        signInbutton1.classList.remove("activebuttonhover");
        signInbutton2.classList.remove("activebuttonhover");
    }
});


































































