$(function () {

    new WOW().init();

    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = "body";
    var options = {
        format: 'dd/mm/yyyy',
        container: container,
        beforeShowDay: true,
        todayHighlight: true,
        autoclose: true,
        language: 'vi'
    };
    $('#datepicker').datepicker(options);


    $('#owl-farvorite').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        nav: true,
        autoPlay: true,
        items: 5,
        pagination: true,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: false,
    });

    var $gallery = $('#gallery').gallerie({
        thumbboxTriggerWidth: 0.10,
        thumbboxSpeed: 0.5,
        imageEvent: 'click',
        elem: 'a.galary',
        wrapAround: true
    });

    var $gallery = $('#gallery2').gallerie({
        thumbboxTriggerWidth: 0.10,
        thumbboxSpeed: 0.5,
        imageEvent: 'click',
        elem: 'a.galary2',
        wrapAround: true
    });

    $('#myBtn').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    $('.click-show').on('click', function () {
        $('ul.list-menu').toggleClass('show-menu');
    })

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#myBtn').fadeIn(200); // Fade in the arrow
            $('.navbar-default').addClass('menu-fixed');
            $('.logo').addClass('show-logo');

        } else {
            $('#myBtn').fadeOut(200); // Else fade out the arrow
            $('.navbar-default').removeClass('menu-fixed');
            $('.logo').removeClass('show-logo');
            $('#myBtn').fadeOut(200);
        }
    });
    $('.menu_up').on('click', function () {
        $('.collapse').removeClass('in');
    });
    // menu mobie click.
    $('span.menu_level').on('click', function () {
        $(this).next('.sub-mega-menu').toggleClass('show_mobie');
    });

    $('.single-tab-details').on('click', ' .click-more', function () {
        $(this).toggleClass('show-more').next().toggleClass('show_inf');
    });


    // list order ticket function.a-left

    if (document.querySelectorAll('.list-order li')) {

        var listOrder = document.querySelectorAll('.list-order li');
        var contentOrder = document.querySelectorAll('.tab-pane');
        //contentOrder[indexActive].classList.add('in');
        var listOrderArray = Array.from(listOrder);
        // console.log(indexActive[0]);
        listOrderArray.forEach(function (value, index) {
            //var click = value.querySelector('li');
            value.addEventListener('click', function () {

                $('.list-order li').removeClass('active');
                $('.list_ct .tab-pane').removeClass('active');
                var checkedStep = value.classList;
                var indexActive = checkedStep[0].split('-')[1];
                contentOrder[indexActive - 1].classList.add('active', 'in');
                if(indexActive == 1) {
                    document.documentElement.style.setProperty('--var-width', '20%');
                }
                if(indexActive == 2) {
                    document.documentElement.style.setProperty('--var-width', '40%');
                }
                if(indexActive == 3) {
                    document.documentElement.style.setProperty('--var-width', '60%');
                }
                if(indexActive == 4) {
                    document.documentElement.style.setProperty('--var-width', '80%');
                }
                if(indexActive == 5) {
                    document.documentElement.style.setProperty('--var-width', '97%');
                }
                //$('.list-order ul').css('--myvar', '20%');
                for (var i = 1; i <= indexActive; i++) {
                    var string = `.step-${i}`;
                    var string2 = `.step-${i - 1}`;
                    $(string).addClass('active');
                    $(string2).addClass('checked');
                }
            })
        })
    }


    // console.log(listOrderArray);
})
