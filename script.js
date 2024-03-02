document.addEventListener("DOMContentLoaded", function() {
    var videoUrls = [
        "Music/Indian_Music.mp4",
    ];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videoUrls.length);
        var randomVideoUrl = videoUrls[randomIndex];
        
        // Open the video in a new tab
        var newTab = window.open(randomVideoUrl, '_blank');
        if (newTab) {
            newTab.focus(); // Focus on the newly opened tab
        } else {
            alert('Please allow pop-ups for this site to open the video.');
        }
    }

    var buttons = document.querySelectorAll(".grid-container button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playRandomVideo();
        });
    });
});