// let form = document.querySelector('.add-to-cart');

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

const buttons = Array.from(document.querySelectorAll('#cartButton'))

buttons.forEach((button) => {
    
})




const forms = Array.from(document.querySelectorAll('.add-to-cart'));
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// Для каждого из родителей


forms.forEach((item) => {
    // Вешаем обработчик
    item.addEventListener('submit', async (event) => {
        event.preventDefault()
        fetch('/cart/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify({
                product_id: item.product_id.value,
            })
        })
        // let id = item.querySelector('.product-id').value



    });
});
