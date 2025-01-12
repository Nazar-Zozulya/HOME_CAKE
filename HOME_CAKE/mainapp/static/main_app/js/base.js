let coverCart = document.querySelector('#coverCart')
let cartButton = document.querySelector('#headerCart')
let exitCart = document.querySelector('#exitCart')
let continueShopping = document.querySelector('#continueShopping')

let coverSelfOrder = document.querySelector('#coverSelfOrder')
let selfButton = document.querySelector('#headerSelfOrder')
let exitSelf = document.querySelector('#exitSelf')

// function closeModal(cover) {
//     cover.style.display = 'none'
// }

// function openModal(cover) {
//     cover.style.display = 'flex'
// }

// cartButton.addEventListener('click',openModal(coverCart));

// continueShopping.addEventListener('click', closeModal(coverCart))
cartButton.addEventListener('click', function() {
    coverCart.style.display = 'flex'
})

continueShopping.addEventListener('click', function() {
    coverCart.style.display = 'none'
})

exitCart.addEventListener('click', function() {
    coverCart.style.display = 'none'
})

//////////////

selfButton.addEventListener('click', function() {
    coverSelfOrder.style.display = 'flex'
})

exitSelf.addEventListener('click', function() {
    coverSelfOrder.style.display = 'none'
})