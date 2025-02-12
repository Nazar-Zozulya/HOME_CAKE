

function closeModal(cover) {
    return cover.style.display = 'none'
}

function openModal(cover) {
    return cover.style.display = 'flex'
}

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