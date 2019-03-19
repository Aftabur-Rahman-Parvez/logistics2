AOS.init();

$(function(){

    // loader
    // $('.js-preloader').preloadinator({
    //     minTime:2000
    // });

    // menu scroll
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll >= 100){
            $('.header').addClass('sticky');
        }else{
            $('.header').removeClass('sticky');
        }

    });



})


$('#home_slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    center: true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
            loop:false
        }
    },
    // navText:['<i class="fa fa-caret-left">','<i class="fa fa-caret-right">']
})
$('#service_slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        1000:{
            items:4,
            loop:true,
            dots:true
        }
    },
    navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">']
})


$('#review_slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        1000:{
            items:3,
            loop:true,
            dots:true
        }
    },
    navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">']
})

$('#client-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:true,
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    },
    navText:['<i class="fa fa-caret-left">','<i class="fa fa-caret-right">']
})

// menu
$(".main_menu_1 .nav-item .nav-link").click(function(){

    $('.nav-item').removeClass('active');
    $(this).parent('.nav-item').addClass('active');
})


$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

// window.onload = function() {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         title: {
//             // text: "Our Activities"
//         },
//         data: [{
//             type: "pie",
//             startAngle: 240,
//             yValueFormatString: "##0.00\"%\"",
      
//             dataPoints: [
//                 {y: 39.45, label: "Google"},
//                 {y: 17.31, label: "Bing"},
//                 {y: 7.06, label: "Baidu"},
//                 {y: 14.91, label: "Yahoo"},
//                 {y: 30.26, label: "Others"}
//             ]
//         }]
//     });
//     chart.render();
    
// }


window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    { 
      title: {
        // text: "Adding Attributes to  axisX"
           },
      axisX: {
        title: "Our Target is to reduce Carbon Emissions to as low as possible",
        titleFontFamily: "comic sans ms"
      },
      data: [
      {        
        type: "column",
        dataPoints: [
        { x: 8, y: 71, label: "January" },
        { x: 16, y: 55, label: "February" },
        { x: 24, y: 50, label: "March"},
        { x: 32, y: 65, label: "April" },
        { x: 40, y: 95, label: "May"},
        { x: 48, y: 68, label: "June"},
        { x: 56, y: 28, label: "July"},
        { x: 64, y: 67, label: "August"},
        { x: 72, y: 14, label: "September"},
        { x: 80, y: 34, label: "October"},
        { x: 88, y: 55, label: "November"},
        { x: 96, y: 14, label: "December"}

      
        ]
      }
      ]
    });

    chart.render();
  }

