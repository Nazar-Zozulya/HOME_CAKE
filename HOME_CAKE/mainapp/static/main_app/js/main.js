let form = document.querySelector('.add-to-cart');

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

    // $("#add-to-cart").click(function(event) {
    //     // $('#counter').html(function(i, val) {
    //     // alert(123)
    //     $.ajax({
    //         url: form.attr("action"),
    //         type: 'POST',
    //         data: data,
    //         cache: true,
    //         success: function() { alert('Request has returned') },

    //         error: function(){ console.log("error") }

    //     });
    //     event.preventDefault();
    //     // return alert(123);
    //     // });
    // });
});






// form.addEventListener('submit', function(event) {
//   event.preventDefault();
// //   var formaction = '?';
// //   console.log(formaction);
//   alert('123')
// });
// let form = document.querySelectorAll('.add-to-cart');

// for (index = 0; index < form.length; index++) {
//     button = form[index];
//     form.addEventListener('submit', event => {
//         event.preventDefault();  // Стоп! Прерываем действие по умолчанию.
//         alert(123)
//     });
// }

// const cookie = document.cookie

const forms = Array.from(document.querySelectorAll('.add-to-cart'));
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// Для каждого из родителей
forms.forEach((item) => {
    // Вешаем обработчик
    item.addEventListener('submit', async (event) => {
        event.preventDefault()
        alert(123)
        fetch('/cart/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify({
                // session_key: 123,
                product_id: 1,
            })
        })
        // let id = item.querySelector('.product-id').value



    });
});
