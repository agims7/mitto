$(document).ready(function() {

    if (window.innerWidth <= 768) {
        $('.options').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 4,
            variableWidth: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: false,
            centerPadding: '20px'
        });
    }

    window.onresize = function() {
        if (window.innerWidth <= 768) {
            $('.options').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 4,
                variableWidth: true,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2500,
                arrows: false,
                centerPadding: '20px'
            });
        } else if (window.innerWidth > 768) {
            $('.options').slick('unslick');
        }
    };

    /////////////// Navbar fixed / background ///////////////
    $(window).scroll(function() {
        if ($(document).scrollTop() > (window.innerHeight - 84)) {
            $(".navbar").css("background-color", "#39c0a8");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });

    /////////////// Smooth scrolling ///////////////
    $(document).on('click', 'a', function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 84
        }, 800);
    });

    /////////////// Close cookie ///////////////
    $(".cookies-button").on('click', function() {
        $(".cookies").css("display", "none");
        $(".navbar").css("top", "0");
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

    var intervalFunctions = [second, third, fourth, first];
    var intervalIndex = 0;
    window.setInterval(function() {
        intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }, 5500);

    $(".paragraph-first").click(first);
    $(".paragraph-second").click(second);
    $(".paragraph-third").click(third);
    $(".paragraph-fourth").click(fourth);

    function first() {
        $(".paragraph-first-second").css({ "opacity": "1", "height": "auto" });
        $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        $(".wysylka").css({ "display": "block" });
        $(".koszyk").css({ "display": "none" });
        $(".historia").css({ "display": "none" });
        $(".oszczednosci").css({ "display": "none" });
        $(".paragraph-first").addClass("active-paragraph");
        $(".paragraph-second").removeClass("active-paragraph");
        $(".paragraph-third").removeClass("active-paragraph");
        $(".paragraph-fourth").removeClass("active-paragraph");
    }

    function second() {
        $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-second-second").css({ "opacity": "1", "height": "auto" });
        $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        $(".wysylka").css({ "display": "none" });
        $(".koszyk").css({ "display": "block" });
        $(".historia").css({ "display": "none" });
        $(".oszczednosci").css({ "display": "none" });
        $(".paragraph-first").removeClass("active-paragraph");
        $(".paragraph-second").addClass("active-paragraph");
        $(".paragraph-third").removeClass("active-paragraph");
        $(".paragraph-fourth").removeClass("active-paragraph");
    }

    function third() {
        $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-third-second").css({ "opacity": "1", "height": "auto" });
        $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        $(".wysylka").css({ "display": "none" });
        $(".koszyk").css({ "display": "none" });
        $(".historia").css({ "display": "block" });
        $(".oszczednosci").css({ "display": "none" });
        $(".paragraph-first").removeClass("active-paragraph");
        $(".paragraph-second").removeClass("active-paragraph");
        $(".paragraph-third").addClass("active-paragraph");
        $(".paragraph-fourth").removeClass("active-paragraph");
    }

    function fourth() {
        $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
        $(".paragraph-fourth-second").css({ "opacity": "1", "height": "auto" });
        $(".wysylka").css({ "display": "none" });
        $(".koszyk").css({ "display": "none" });
        $(".historia").css({ "display": "none" });
        $(".oszczednosci").css({ "display": "block" });
        $(".paragraph-first").removeClass("active-paragraph");
        $(".paragraph-second").removeClass("active-paragraph");
        $(".paragraph-third").removeClass("active-paragraph");
        $(".paragraph-fourth").addClass("active-paragraph");
    }
});