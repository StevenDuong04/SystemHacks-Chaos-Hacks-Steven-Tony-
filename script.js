document.addEventListener("DOMContentLoaded", function() {
    var videoUrls = [
        "Music/Indian_Music.mp4",
        "Music/kpop.mov",
        "Music/sleeping.mov"
    ];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videoUrls.length);
        var randomVideoUrl = videoUrls[randomIndex];
 
        var newTab = window.open(randomVideoUrl, '_blank');
        if (newTab) {
            newTab.focus();
        }
    }

    var buttons = document.querySelectorAll(".grid-container button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playRandomVideo();
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var videoUrls = [
        "Music/Indian_Music.mp4"
    ];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videoUrls.length);
        var randomVideoUrl = videoUrls[randomIndex];
        
        var newTab = window.open(randomVideoUrl, '_blank');
        if (newTab) {
            newTab.focus();
        }
    }

    var buttons = document.querySelectorAll(".BigButton button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playRandomVideo();
        });
    });
});