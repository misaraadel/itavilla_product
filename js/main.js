//intialization plugins
$(document).ready(function () {
    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });
    //fav-btn
    $(`.fav-butn`).click(function() {
        $(this).toggleClass(`active`);
    });
    //
    $(`.products-pg .categ_card`).click(function() {
        $('.products-pg .categ_card.active' ).removeClass('active');
        $(this).addClass('active');
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    /*Loading page */
    $(window).on("load", function(){
        $(".loading-page")
        .fadeOut(2000 , function(){
            $("body").css("overflow" , "auto");
            $("this").fadeOut(1500 , function(){
                $(this).remove();
            });
        });
    });  
});
// ------------ SHOW HED PASS ----------
$(document).ready(function() {
    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });
}); 

//upload image
$(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
});

$(document).ready(function() {
    let i = 120;
    let a = setInterval(function() {
        if (i < 10)
            document.querySelector('.count_down').textContent = `0${i}`;
        else {
            document.querySelector('.count_down').textContent = `${i}`
        }
        i--;
        if (i < 0) {
            clearInterval(a);
        }
    }, 1000)
});

$(document).ready(function() {
    const codes = document.querySelectorAll('.code');
    codes[0].focus();
    codes.forEach((code, idx) => {
        code.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                codes[idx].value = '';
                setTimeout(() => codes[idx + 1].focus(), 10);
            } else if (e.key === 'Backspace') {
                setTimeout(() => codes[idx - 1].focus(), 10);
            }
        });
    });
});
$(document).ready(function() {
    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });
});
$(document).ready(function() {
    // Search Container 
    $('#searchToggler').on('click', function () {
        $('.search-wrapper').addClass('active');
        $('body').addClass('overflow_hidden');
    });
    $('#dismissSearch, .search-wrapper .overlay').on('click', function () {
        $('.search-wrapper').removeClass('active');
        $('body').removeClass('overflow_hidden');
    });
});

var swiper = new Swiper('.header-swiper', {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
    effect: 'fade',
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
});
var swiper = new Swiper('.categories-sec .categ-swiper', {
    speed: 900,
    spaceBetween: 15,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 6,
        },
    }
});

var swiper = new Swiper('.filter-categ-swiper', {
    speed: 900,
    spaceBetween: 15,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});
var swiper = new Swiper(".produsctSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

var swiper2 = new Swiper(".produsctSwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper = new Swiper('.reviews-swiper', {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
    // autoplay: {
    //     delay: 2500,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});
//Swiper 
// var swiper = new Swiper(' .swiper-container', {
//     loop: true,
//     speed: 900,
//     slidesPerView: 1,
//     spaceBetween: 15,
//     // autoplay: {
//     //     delay: 2500,
//     // },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },
//     }
// });

