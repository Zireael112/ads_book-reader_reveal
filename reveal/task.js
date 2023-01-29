const notice = Array.from(document.querySelectorAll('.reveal'))

window.addEventListener('scroll', () => {
    notice.forEach((el) => {
        let elPos = el.getBoundingClientRect()
        // console.log(elPos);
        if (elPos.y < 350) {
            el.classList.add('reveal_active')
        }
    })
})