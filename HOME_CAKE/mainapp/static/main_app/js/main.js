$(document).ready(function () {
    $('.assortment-products').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        easing: "ease",
        infinite: false,
    });
    $('.new-products').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        easing: "ease",
        infinite: false,
    });
});


// Подключаю кнопки навигации
var headerMain = document.querySelector('#headerMain')
var headerMain = document.querySelector('#headerNews')
var headerMain = document.querySelector('#headerAboutUs')
var headerMain = document.querySelector('#headerAssortment')
// var sliderAssortment = document.querySelector(".assortment")




// Делаю скролл при нажатии
headerMain.onclick = function () {
    window.scrollTo(0, 0)
}

headerNews.onclick = function () {
    document.querySelector('.new').scrollIntoView()
}

headerAboutUs.onclick = function () {
    document.querySelector('.about-us h1').scrollIntoView()
}

headerAssortment.onclick = function () {
    document.querySelector('.assortment').scrollIntoView()
}
