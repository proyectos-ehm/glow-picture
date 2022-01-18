
(function ($) {
    "use strict";
    $('[data-icon="hamburguer"]').on("click", function () {
        if (!$('[data-icon="hamburguer-bar"]').hasClass("bar-on")) {
            $('[data-icon="hamburguer-bar"]').addClass("bar-on");
        } else {
            $('[data-icon="hamburguer-bar"]').removeClass("bar-on");
        }
    });
})(jQuery);

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 100 + "px",
            },
            1000
        );
});
