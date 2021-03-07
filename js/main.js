$(window).on("load", function() {
    $(".preloader").fadeOut("slow");    
})
$(document).ready(function(){
    // navbar 
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("nav-stk");
        } else {
            $(".navbar").removeClass("nav-stk");
        }
    });
    // Vídeo popup
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function() {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
                $("#player-1").attr("src","");
            } else {
                $(".video-popup").addClass("open");
                if ($("#player-1").attr("src") == '') {
                    $("#player-1").attr("src",videoSrc);
                }
                
            }
        });

        // Carrousel recursos
        $('.recurso-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoPlay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });

        // Fotos recursos
        $('.fotos-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoPlay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                }
            }
        });

        // Oque as pessoas falam
        $('.cliente-carousel').owlCarousel({
            loop:true,
            margin:10,
            // autoPlay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });

        // scroll page
        $.scrollIt({
            topOffset: -50
        });
        // Nav bar collapse
        $(".nav-link").on("click", function(){
            $(".navbar-collapse").collapse("hide")
        });

        //modo noite e dia
        function toggleTheme() {
            if(localStorage.getItem("modo") !== null) {
                if(localStorage.modo === "dark") {
                    $("body").addClass("dark");
                } else {
                    $("body").removeClass("dark");                  
                }
            }
            updateIcon();
        }
        toggleTheme()

        $(".toggle-theme").on("click", function() {
            $("body").toggleClass("dark");
            if($("body").hasClass("dark")) {
                localStorage.modo = "dark";
            } else {
                localStorage.modo = "light";
            }
            updateIcon();
        });

        function updateIcon() {
            if($("body").hasClass("dark")) {
                $(".toggle-theme i").removeClass("fa-moon");
                $(".toggle-theme i").addClass("fa-sun");
            } else {
                $(".toggle-theme i").removeClass("fa-sun");
                $(".toggle-theme i").addClass("fa-moon");
            }
        }

    });