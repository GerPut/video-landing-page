const menutoggle = document.querySelector(".toggle")
const bar = document.querySelector(".bar")
const showcase = document.querySelector(".showcase")

menutoggle.addEventListener('click', () => {
    bar.classList.toggle('spin')
    menutoggle.classList.toggle('active')
    showcase.classList.toggle('active')
})