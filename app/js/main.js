$(function(){

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');

    })

    $('.shop__filter-btn').on('click', function () {
        $('.shop__filters').slideToggle();
    });

    $('.blog__filter-btn').on('click', function () {
        $('.blog-page__aside').slideToggle();
    });

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');

    });

    $(".product-slide__thumb").slick({
        asNavFor: ".product-slide__big",
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    }),

    $(".product-slide__big").slick({
        asNavFor: ".product-slide__thumb",
        draggable: false,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    draggable: true,
                }
            }
        ]
    }),

    $('.product-list__filter-btn').on('click', function() {
        $('.product-list__filter-btn').removeClass('product-list__filter-btn--active');
        $(this).addClass('product-list__filter-btn--active');
    })

    $('.button-list').on('click', function () {
        $('.products-item').addClass('products-item--list');
        $('.product-list__items').addClass('product-list__nogrid');
    });

    $('.button-grid').on('click', function () {
        $('.products-item').removeClass('products-item--list');
        $('.product-list__items').removeClass('product-list__nogrid');
    });

    $('.select-style, .product-one__num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

    $(".product-star").rateYo({
        starWidth: "15px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: !0
    });

});