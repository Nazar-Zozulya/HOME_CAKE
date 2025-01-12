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



//////////

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

//////////

var addToCart = document.querySelectorAll('#addToCart');

addToCart.addEventListener('click', function(){
    addToCart.classList.toggle('cart-added')
})

//////////

// var cartButton = document.querySelector('#headerCart')