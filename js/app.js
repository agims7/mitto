console.log('cos')

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > (window.innerHeight - 84)) {
            $(".navbar").css("background-color", "#39c0a8");
            console.log('cos1')
        } else {
            $(".navbar").css("background-color", "transparent");
            console.log('cos2')
        }
    });
});