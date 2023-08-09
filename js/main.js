$(document).ready(function () {
    $("#load-header").load("header.html");
    $("#footer").load("footer.html");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 92) {
            // $("header").css({
            //     'background-color': 'rgba(255, 255, 255, 0.50)'
            // })
            $()
            $("header img").css({
                'width': '140px'
            })
        }
        else {
            // $("header").css({
            //     'background-color': 'rgba(255, 255, 255, 0.20)'
            // })
            $("header img").css({
                'width': '221.871px'
            })
        }
    })

    //Line Hover Animation on section 
    $("footer").mouseover(function () {
        $(this).find(".left-to-right").addClass("active");
        $(this).find(".top-to-bottom").addClass("active");
    })
    $(".collection .col-3").eq(0).mouseover(function () {
        $(".collection").css({ 'background-color': '#87603C' })
    })
    $(".collection .col-3").eq(0).mouseout(function () {
        $(".collection").css({ 'background-color': '#ECE3DB' })
    })
    $(".collection .col-3").eq(1).mouseover(function () {
        $(".collection").css({ 'background-color': '#C0793A' })
    })
    $(".collection .col-3").eq(1).mouseout(function () {
        $(".collection").css({ 'background-color': '#ECE3DB' })
    })
    $(".collection .col-3").eq(2).mouseover(function () {
        $(".collection").css({ 'background-color': '#EDCEA9' })
    })
    $(".collection .col-3").eq(2).mouseout(function () {
        $(".collection").css({ 'background-color': '#ECE3DB' })
    })

});

// let nav = document.querySelector("header");
// let navImg = document.querySelector("header img");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 90) {
//         nav.style.backgroundColor = "rgba(255, 255, 255, 0.50)";
//         navImg.style.width = "140px";
//     } else {
//         nav.style.backgroundColor = "rgba(255, 255, 255, 0.20)";
//         navImg.style.width = "221.871px";
//     }
// }


$(window).on('load', function () {
    var windowWidth = $(window).width();

    if (windowWidth <= 768) {
     $(".footer").find(".col-sm-6").removeClass("top-to-bottom");
     $(".store-loc-list").slideUp();
     $("#categoryTabs").slideUp();
     $(".navbar-brand img").attr("src","image/footer-logo.png");
    } else {
      $(".navbar-brand img").attr("src","image/logo.png");
      $("#testimonal").slick('unslick');
      $(".store-loc-list").slideDown();
      $("#categoryTabs").slideDown();
    }
  });




