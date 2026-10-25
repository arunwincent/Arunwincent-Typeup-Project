var menu = document.querySelector(".menu-toggle");
var navbar=document.querySelector(".navbar");
menu.addEventListener("click",function(){
   if(navbar.style.display==="flex"){
    navbar.style.display="none";
   }
   else{
    navbar.style.display="flex"
   } 
});


var startbutton = document.getElementById("startpractice");
var typinginput = document.getElementById("typingsection-input");
var time = document.querySelector("#time h3");
var speed = document.querySelector("#speed h3");
var accuracy = document.querySelector("#accuracy h3");
var paragraph = document.querySelector(".typingcontent p");

var seconds = 60;
var timer;

startbutton.addEventListener("click", function() {
    clearInterval(timer);

    seconds = 60;
    time.textContent = "60s";
    speed.textContent = "0 WPM";
    accuracy.textContent = "100%";
    typinginput.value = "";
    typinginput.disabled = false;
    typinginput.focus();

    timer = setInterval(function() {
        seconds--;
        time.textContent = seconds + "s";

        if (seconds === 0) {
            clearInterval(timer);
            typinginput.disabled = true;
            
        }
    }, 1000);
});

typinginput.addEventListener("input", function() {
    var typed = typinginput.value;
    var original = paragraph.textContent;
    var correct = 0;

    for (var i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) {
            correct++;
        }
    }

    accuracy.textContent = typed.length
        ? Math.round(correct / typed.length * 100) + "%"
        : "100%";

    var words = typed.trim() ? typed.trim().split(/\s+/).length : 0;
    var elapsed = 60 - seconds;
    speed.textContent = elapsed > 0
        ? Math.round(words / elapsed * 60) + " WPM"
        : "0 WPM";
});
<<<<<<< HEAD
=======


var bestSpeed = localStorage.getItem("bestSpeed") || 0;
var bestAccuracy = localStorage.getItem("bestAccuracy") || 0;
var testsCompleted = localStorage.getItem("testsCompleted") || 0;

var speedValue = document.getElementById("best-speed");
var accuracyValue = document.getElementById("best-accuracy");
var testsValue = document.getElementById("tests-completed");

if (speedValue && accuracyValue && testsValue) {
    speedValue.textContent = bestSpeed + " WPM";
    accuracyValue.textContent = bestAccuracy + "%";
    testsValue.textContent = testsCompleted;
}
>>>>>>> 9b6c0f8fd760f75060198e9fabce34206d420a3d
