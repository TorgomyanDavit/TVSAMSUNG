var  server = "https://all.mergel-stone.am/api"
var pathnameUrl = window.location.pathname
var checkPath = pathnameUrl === "/index.html" || pathnameUrl === "/registerPage/register.html" 
|| pathnameUrl === "/signInPage/signIn.html" || pathnameUrl === "/forgetPassword/forget.html"
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

var authentication = function() {
    // debugger
    if(!!sessionStorage.getItem("authenticated") && checkPath === true) {
        window.location.href = "../channelMainPage/channelMainPage.html"
    } else if(!!sessionStorage.getItem("authenticated") === false &&  checkPath === false) { 
        window.location.href = "/signInPage/signIn.html"
        sessionStorage.removeItem("authenticated") 
    }
}
authentication()

var validation = function(response,email,password) {
    if(!!(email.value.match(mailformat))) {
        errorFunction(email)
        TimeOuth(email)
    } else if(password.value.length < 6 || !response.access_token) {
        errorFunction(email,password)
        TimeOuth(email,password)
    } else if(!!response.access_token) {
        sessionStorage.setItem("authenticated", response.access_token);
        window.location.href = "../channelMainPage/channelMainPage.html"
    }
}

var errorFunction = function(...array) {
    array.forEach(function(val,i) {
        val.classList.add("errorBorder")
    })
}

var TimeOuth = function(...array) {
    setTimeout(function(){
        array.forEach(function(val,i) {
            val.classList.remove("errorBorder")
        })
    },2000)
}

var newPasswordValidation = function(response,email) {
    
}


// var validation = function(email,password) {
//     console.log(input[0].classList.add("errorBorder"));
//     setTimeout(function(response){})
// }

// /user.html
// /screen.html
    
// sergemuradxanyan704@gmail.com





















// fetch("https://all.mergel-stone.am/api/home").then(function(response) { return response.json()})
// .then(function(response) {
//     descriptionHomePage.innerText = "response.home.description"
//     // TitleHomePage.innerText = response.home.title
//     console.log(response);
// })

// var getHomePage = async function() {
//     var responseHome = await fetch("https://all.mergel-stone.am/api/home").then((response) => response.json())
//     TitleHomePage.innerText = responseHome
//     console.log(responseHome);
// }
// getHomePage()

// var getHomePage = async function() {
//     const Http = new XMLHttpRequest();
//     const url="http://all.mergel-stone.am/public/api/about";
//     // const url="https://jsonplaceholder.typicode.com/posts";
//     Http.mode = "cors"
//     Http.open("GET", url);
//     Http.send();
//     // Http.withCredentials = true;
//     Http.onreadystatechange = (e) => {
//         TitleHomePage.innerText = Http.responseText
//         console.log(Http.responseText)
//     }
// }
// getHomePage()