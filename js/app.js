$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > (window.innerHeight - 84)) {
            $(".navbar").css("background-color", "#39c0a8");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });

    //Smooth scrolling
    $(".pointer").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 84
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    //Video section
    $(".video-link").on('click', function(event) {
        $(".youtube-container").css("display", "block");
        playVideo();
    });

    $(".youtube-container").on('click', function(event) {
        stopVideo();
        $(".youtube-container").css("display", "none");
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            stopVideo();
            $(".youtube-container").css("display", "none");
        }
    });

});