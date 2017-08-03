    $(document).ready(function() {

        /////////////// Navbar fixed / background ///////////////
        $(window).scroll(function() {
            if ($(document).scrollTop() > (window.innerHeight - 84)) {
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

        var intervalFunctions = [first, second, third, fourth];
        var intervalIndex = 0;
        window.setInterval(function() {
            intervalFunctions[intervalIndex++ % intervalFunctions.length]();
        }, 5000);

        $(".paragraph-first").click(first);
        $(".paragraph-second").click(second);
        $(".paragraph-third").click(third);
        $(".paragraph-fourth").click(fourth);

        function first() {
            $(".paragraph-first-second").css({ "opacity": "1", "height": "78px" });
            $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        }

        function second() {
            $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-second-second").css({ "opacity": "1", "height": "78px" });
            $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        }

        function third() {
            $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-third-second").css({ "opacity": "1", "height": "120px" });
            $(".paragraph-fourth-second").css({ "opacity": "0", "height": "0" });
        }

        function fourth() {
            $(".paragraph-first-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-second-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-third-second").css({ "opacity": "0", "height": "0" });
            $(".paragraph-fourth-second").css({ "opacity": "1", "height": "78px" });
        }

    });