
const cartStyle = `display: flex; flex-direction: row; align-items: center; width: 90%; min-height: 150px;`

const imgStyle = `width: 150px; `

const textDivStyle = "display: flex; flex-direction: column; align-items: flex-start; height: 100%;  justify-content: space-between; "

const mainTextDivStyle = `display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 5px; width: 600px;`

const nameText = `font-family: 'Jura'; font-style: normal; font-weight: 700; font-size: 20px; color: #0F0202;`

const compositionText = `font-family: 'Jura'; font-style: normal; font-weight: 700; font-size: 15px; color: #5C5C5C;`

const secondTextDivStyle  = `display: flex; flex-direction: column; justify-content: center; align-items: flex-end; width: 100%;`

const secondTextDiv = `display: flex; flex-direction: row; justify-content: flex-end; align-items: center; `

const priceText = ` font-family: 'Mplus 1p Bold'; font-style: normal; font-weight: 700; font-size: 24px; text-align: center; color: #000000; `

const changeCountDiv = " display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 10px; gap: 10px; "

const minusAndPlusText = "font-family: 'Mplus 1p Bold'; font-style: normal; font-weight: 700; font-size: 20px; text-align: center; color: #999897; border: none; background: none; cursor: pointer; "

const countDiv = "box-sizing: border-box; display: flex; flex-direction: row; align-items: flex-start; padding: 5px 17px; border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 5px; "

const countText = "font-family: 'Mplus 1p Bold'; font-style: normal; font-weight: 700; font-size: 16px; text-align: center; color: #000000; "

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
     $('#headerCart').click(async function () {
        try {
            //  // получаем список айдишников с куки

            const response = await fetch(`/cart/products/`)
            const all_products = await response.json()

            const products = all_products.products

            const sumCart = document.querySelector('#sumCart')

            all_sum = all_products.sum

            sumCart.textContent = all_sum
            // console.log(all_products)

            const countProducts = {}

            products.forEach((product)=>{
                countProducts[product.id] = product.count
            })

            console.log(countProducts)

            const cartContainer = document.querySelector('.cart-products')

            // view_products = all_products.
            products.map(function (product) {
                const cartDiv = document.createElement('div')
                cartDiv.classList.add('cart-product')

                

                // Создаем карточку продукта
                cartDiv.innerHTML = `
                <div style="${cartStyle}" >
                    <img src="${product.image}" style="${imgStyle}"  alt="123">
                    <div style="${textDivStyle}">
                        <div style="${mainTextDivStyle}">
                            <p style="${nameText}" >${product.name}</p>
                            <p style="${compositionText}" >${product.composition}</p>
                        </div>
                        <div style="${secondTextDivStyle}">
                            <div style="${secondTextDiv}">
                                <div style="${changeCountDiv}">
                                    <button id="minusButton${product.id}" style="${minusAndPlusText}" >-</button>
                                    <div style="${countDiv}">
                                        <p  id="count${product.id}" style="${countText}">${countProducts[product.id]}</p>
                                    </div>            
                                    <button id="plusButton${product.id}" style="${minusAndPlusText}">+</button>
                                </div>
                                <p style="${priceText}">${product.price}</p>                                            
                            </div>
                        </div>
                    </div>
                </div>
                `


                // Выводим карточку
                cartContainer.appendChild(cartDiv)

                const countP = document.querySelector(`#count#${product.id}`)

                const plusButton = document.querySelector(`#plusButton${product.id}`)

                const minusButton = document.querySelector(`#minusButton${product.id}`)

                console.log(countP)

                plusButton.addEventListener('click', function () {
                    let cart_cookie = document.cookie.split(';')[1]    
                    let currentProduct = cart_cookie.split('=')[1]
                    let productsList = currentProduct.split(' ')
    
                    productsList.splice()
                    productsList.push(product.id)

                    countProducts[product.id] += 1
                    updateCounter()

                    document.cookie = `cart = ${productsList.join(' ')}`
                })
                
                minusButton.addEventListener('click', function () {
                    let cart_cookie = document.cookie.split(';')[1]    
                    let currentProduct = cart_cookie.split('=')[1]
                    let productsList = currentProduct.split(' ')

                    let index = productsList.indexOf(`${product.id}`)

                    if( index !== -1){
                        productsList.splice(index, 1)
                    }

                    countProducts[product.id] -= 1
                    updateCounter()

                    document.cookie = `cart = ${productsList.join(' ')}`
                })

                function updateCounter() {
                    if(countProducts[product.id] === 0){
                        cartDiv.remove()
                    } else {
                        countP.textContent = countProducts[product.id];
                        console.log(countProducts)
                    }
                }

            })
        } catch(error){
            console.log(error)
        }
    })
})













// отримуємо кнопку додавання в cart
const buttonBuy = document.querySelectorAll('#cartButton')
// робимо цикл для всіх продуктів
for (let count = 0; count < buttonBuy.length; count++) {
    let button = buttonBuy[count]
    // var countInCart = 0
    // задаємо умову на додаванн продукту в cart
    button.addEventListener('click', function(event){
        let cart_cookie = document.cookie.split(';')[1]
        console.log(cart_cookie)
        if (cart_cookie === undefined || cart_cookie === ''){
            // обрізаємо cookies
            document.cookie = `cart = ${button.value}`
        }
        else {
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
        }
    })
}