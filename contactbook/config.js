

let rootPath= "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey=checkApiKey();

function checkApiKey("gettybuys@gmail.com"){
    if(!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
        return localStorage.getItem("apiKey");
}