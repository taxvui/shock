    jQuery(document).ready(function(e) {
        function t(t) {
            e(t).bind("click", function(t) {
                t.preventDefault();
                e(this).parent().fadeOut()
            })
        }
        e(".dropdown-toggle").click(function() {
            var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
            e(".button-dropdown .dropdown-menu").hide();
            e(".button-dropdown .dropdown-toggle").removeClass("active");
            if (t) {
                e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
            }
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
        });
        e(document).bind("click", function(t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
        })

        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
            $('.button_container').toggleClass('fixed');
        });

        

        if ($(window).width() < 768 || $(window).height() < 480) {
            $(".footer-top h5").click(function() {
                $(this).next("ul").slideToggle("fast");
                $(this).toggleClass('active');
            });
        }
        

        
    });
    
     (function($) {
        var touchStartX = null;

        $('.carousel').each(function() {
            var $carousel = $(this);
            $(this).on('touchstart', function(event) {
                var e = event.originalEvent;
                if (e.touches.length == 1) {
                    var touch = e.touches[0];
                    touchStartX = touch.pageX;
                }
            }).on('touchmove', function(event) {
                var e = event.originalEvent;
                if (touchStartX != null) {
                    var touchCurrentX = e.changedTouches[0].pageX;
                    if ((touchCurrentX - touchStartX) > 60) {
                        touchStartX = null;
                        $carousel.carousel('prev');
                    } else if ((touchStartX - touchCurrentX) > 60) {
                        touchStartX = null;
                        $carousel.carousel('next');
                    }
                }
            }).on('touchend', function() {
                touchStartX = null;
            });
        });

    })(jQuery);