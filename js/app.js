$(document).ready(function() {

    /////////////// Navbar fixed / background ///////////////
    $(window).scroll(function() {
        if ($(document).scrollTop() > (window.inneropacity - 84)) {
            $(".navbar").css("background-color", "#39c0a8");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });

    /////////////// Smooth scrolling ///////////////
    $(document).on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 84
        }, 800);
    });

    /////////////// Video section ///////////////
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

    /////////////// TABS ///////////////
    $(".paragraph-first").on('click', function(event) {
        // $(".paragraph-first-second").css("display", "block");
        // $(".paragraph-second-second").css("display", "none");
        // $(".paragraph-third-second").css("display", "none");
        // $(".paragraph-fourth-second").css("display", "none");
        $(".paragraph-first-second").css("opacity", "1");
        $(".paragraph-second-second").css("opacity", "0");
        $(".paragraph-third-second").css("opacity", "0");
        $(".paragraph-fourth-second").css("opacity", "0");
        $(".paragraph-first-second").css("height", "78px");
        $(".paragraph-second-second").css("height", "0");
        $(".paragraph-third-second").css("height", "0");
        $(".paragraph-fourth-second").css("height", "0");
    });

    $(".paragraph-second").on('click', function(event) {
        // $(".paragraph-first-second").css("display", "none");
        // $(".paragraph-second-second").css("display", "block");
        // $(".paragraph-third-second").css("display", "none");
        // $(".paragraph-fourth-second").css("display", "none");
        $(".paragraph-first-second").css("opacity", "0");
        $(".paragraph-second-second").css("opacity", "1");
        $(".paragraph-third-second").css("opacity", "0");
        $(".paragraph-fourth-second").css("opacity", "0");
        $(".paragraph-first-second").css("height", "0");
        $(".paragraph-second-second").css("height", "78px");
        $(".paragraph-third-second").css("height", "0");
        $(".paragraph-fourth-second").css("height", "0");
    });

    $(".paragraph-third").on('click', function(event) {
        // $(".paragraph-first-second").css("display", "none");
        // $(".paragraph-second-second").css("display", "none");
        // $(".paragraph-third-second").css("display", "block");
        // $(".paragraph-fourth-second").css("display", "none");
        $(".paragraph-first-second").css("opacity", "0");
        $(".paragraph-second-second").css("opacity", "0");
        $(".paragraph-third-second").css("opacity", "1");
        $(".paragraph-fourth-second").css("opacity", "0");
        $(".paragraph-first-second").css("height", "0");
        $(".paragraph-second-second").css("height", "0");
        $(".paragraph-third-second").css("height", "78px");
        $(".paragraph-fourth-second").css("height", "0");
    });

    $(".paragraph-fourth").on('click', function(event) {
        // $(".paragraph-first-second").css("display", "none");
        // $(".paragraph-second-second").css("display", "none");
        // $(".paragraph-third-second").css("display", "none");
        // $(".paragraph-fourth-second").css("display", "block");
        $(".paragraph-first-second").css("opacity", "0");
        $(".paragraph-second-second").css("opacity", "0");
        $(".paragraph-third-second").css("opacity", "0");
        $(".paragraph-fourth-second").css("opacity", "1");
        $(".paragraph-first-second").css("height", "0");
        $(".paragraph-second-second").css("height", "0");
        $(".paragraph-third-second").css("height", "0");
        $(".paragraph-fourth-second").css("height", "78px");
    });

    ///////////////////////////

    // $(".paragraph-first").on('click', function(event) {
    //     $(".paragraph-first-second").css("height", "78px");
    //     $(".paragraph-second-second").css("height", "0");
    //     $(".paragraph-third-second").css("height", "0");
    //     $(".paragraph-fourth-second").css("height", "0");
    // });

    // $(".paragraph-second").on('click', function(event) {
    // $(".paragraph-first-second").css("height", "0");
    // $(".paragraph-second-second").css("height", "78px");
    // $(".paragraph-third-second").css("height", "0");
    // $(".paragraph-fourth-second").css("height", "0");
    // });

    // $(".paragraph-third").on('click', function(event) {
    //     $(".paragraph-first-second").css("height", "0");
    //     $(".paragraph-second-second").css("height", "0");
    //     $(".paragraph-third-second").css("height", "78px");
    //     $(".paragraph-fourth-second").css("height", "0");
    // });

    // $(".paragraph-fourth").on('click', function(event) {
    //     $(".paragraph-first-second").css("height", "0");
    //     $(".paragraph-second-second").css("height", "0");
    //     $(".paragraph-third-second").css("height", "0");
    //     $(".paragraph-fourth-second").css("height", "78px");
    // });


});