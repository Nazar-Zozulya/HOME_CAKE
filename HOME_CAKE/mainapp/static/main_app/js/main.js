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
    $('#headerCart').click(function () {
        fetch('/cart/create')
    })

});

// отримуємо кнопку додавання в cart
const buttonBuy = document.querySelectorAll('#cartButton')
// робимо цикл для всіх продуктів
for (let count = 0; count < buttonBuy.length; count++) {
    let button = buttonBuy[count]
    var countInCart = 0
    // задаємо умову на додаванн продукту в cart
    button.addEventListener('click', function(event){
        // let cookie = document.cookie.split(';')
        let cart_cookie = document.cookie.split(';')[1]
        // let cart_cookie2 = cart_cookie.split(',')
        // alert(cart_cookie)
        // задаємо умову якщо cookies не пуста
        if (cart_cookie != undefined || cart_cookie != ''){
            // обрізаємо cookies
            // alert(document.cookie['cart'])
            let currentProduct = cart_cookie.split('=')[1]
            let productsList = currentProduct.split(' ')
            // alert(productsList)
            if( productsList.includes(button.value) ){
                const index = productsList.indexOf(button.value)
                productsList.splice(index, 1)
                console.log(productsList)
                // let idProduct = productsList
                document.cookie = `cart = ${productsList.join(' ')}`
                return
            }
            else{
                let idProduct = currentProduct + ' ' + button.value
                document.cookie = `cart = ${idProduct}`
            }
            // if (currentProduct.includes('3')){
            //     alert('soso')
            // }
            // alert(currentProduct)
            // додаємо до cookies продукт
            
            // currentProduct = cart_cookie.split(' ')
            // countInCart += 1
            // alert(button.value)
            // window.location.reload()
            // countCart.textContent = currentProduct.length
        }
        // якщо пуста додаємо продукт по id
        else {
            // alert(3)
            document.cookie = `cart = ${button.value}`
        }
    })
}






// const forms = Array.from(document.querySelectorAll('.add-to-cart'));
// const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// // Для каждого из родителей


// forms.forEach((item) => {
//     // Вешаем обработчик


    
//     // item.addEventListener('submit', async (event) => {
//     //     event.preventDefault()
//     //     fetch('/cart/create/', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             'X-CSRFToken': csrfToken
//     //         },
//     //         body: JSON.stringify({
//     //             product_id: item.product_id.value,
//     //             // product_id: '2'
//     //         })
//     //     })
//         // let id = item.querySelector('.product-id').value



//     });
// });
