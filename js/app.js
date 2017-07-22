$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > (window.innerHeight - 84)) {
            $(".navbar").css("background-color", "#39c0a8");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });

    // Add smooth scrolling to all links
    $(".pointer").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 84
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".video-link").on('click', function(event) {
        $(".youtube-container").css("display", "block");
    });

    $(".youtube-close-icon ").on('click', function(event) {
        $(".youtube-container").css("display", "none");
    });


});