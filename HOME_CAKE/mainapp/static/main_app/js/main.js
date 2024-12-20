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
// var navMain = document.getElementById('navMain')
// var navNews = document.getElementById('navNews')
// var navAboutUs = document.querySelector('#navAboutUs')
// var navAssortment = document.querySelectorAll('#navAssortment')
// var sliderAssortment = document.querySelector(".assortment")




// Делаю скролл при нажатии
// navMain.onclick = function () {
//     window.scrollTo(0, 0)
// }

function navMain() {
    window.scrollTo(0, 0)
}

function navNews() {
    document.querySelector('.new').scrollIntoView()
}

function navAboutUs() {
    document.querySelector('.about-us .title').scrollIntoView()
}

function navAssortment() {
    document.querySelector('.assortment').scrollIntoView()
}

// navNews.onclick = function () {
//     document.querySelector('.new').scrollIntoView()
// }

// navAboutUs.onclick = function () {
//     document.querySelector('.about-us h1').scrollIntoView()
// }

// navAssortment.onclick = function () {
//     document.querySelector('.help-slider-cart').scrollIntoView()
// }
