/*
    script.js

    Author: Steven Duong and Tony Wu
    Date of last modication: March 2, 2024
*/
document.addEventListener("DOMContentLoaded", function() {
    var videoUrls = [ 
        "Music/classical.mov",
        "Music/kpop.mov",
        "Music/sleeping.mov",
        "Music/workout.mov"
    ];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videoUrls.length);
        var randomVideoUrl = videoUrls[randomIndex];
 
        var newTab = window.open(randomVideoUrl, '_blank');
        newTab.focus();
    }

    var buttons = document.querySelectorAll(".grid-container button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playRandomVideo();
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {

    function playVideo() {
        var newTab = window.open("Music/everything.mov", '_blank');
        newTab.focus();
        
    }

    var buttons = document.querySelectorAll(".BigButton button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playVideo();
        });
    });
});