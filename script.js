let button = document.getElementById("light-button");
if(localStorage.getItem("mode") == "light"){
    document.body.classList.add("light-mode");
}

button.onclick = function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("mode","light");
    }

    else{
        localStorage.setItem("mode","dark");
    }
};


window.onscroll = function(){

    let header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#323232";
    }

    else{
        header.style.background = "rgba(50,50,50,0.7)";
    }
};


function openAccount(){
    const user = localStorage.getItem("currentUser");
    if(user == null){
        alert("You are not logged in");
        return;
    }

    document.getElementById("accountBox").classList.remove("hidden");
    document.getElementById("accEmail").innerHTML = "Email: " + user;
    const name = localStorage.getItem(user + "_name");
    const phone = localStorage.getItem(user + "_phone");
    const title = localStorage.getItem(user + "_title");
    document.getElementById("accName").innerHTML = "Name: " + name;
    document.getElementById("accPhone").innerHTML = "Phone: " + phone;
    document.getElementById("accTitle").innerHTML = "Title: " + title;
}

function closeAccount(){
    document.getElementById("accountBox").classList.add("hidden");
}

   
function searchCar(){

    let text = document.getElementById("searchInput").value;

    text = text.toLowerCase();

    if(text == "home"){
        location.href = "index.html";
    }

    else if(text == "models"){
        location.href = "models.html";
    }

    else if(text == "compare"){
        location.href = "compare.html";
    }

    else if(text == "about"){
        location.href = "about.html";
    }

    else if(text == "contact"){
        location.href = "contact.html";
    }

    else if(text == "test drive"){
        location.href = "test.html";
    }

    else if(text == "login"){
        location.href = "login.html";
    }

    else{
        alert("No Result");
    }
}

document.getElementById("searchInput").onkeydown = function(event){

    if(event.key == "Enter"){
        searchCar();
    }
};