const fonts = Array.from(document.querySelectorAll('.font-size'))
const linkFontSize = Array.from(document.querySelectorAll('a.font-size'))

// fonts.forEach(el => {
//     el.addEventListener('click', event => {
//         event.preventDefault();
//         // console.log(el.closest('div.book'));
//         const divBook = el.closest('div.book')
        
//         if (el.className === 'font-size font-size_small') {
//             divBook.classList.add('book_fs-small')
//             divBook.classList.remove('book_fs-big')
//         } else if (el.className === 'font-size font-size_big') {
//             divBook.classList.add('book_fs-big')
//             divBook.classList.remove('book_fs-small')
//         } else {
//             divBook.className = 'book'
//         }
        
//     })
// })

fonts.forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
        // console.log(el.closest('div.book'));
        const divBook = el.closest('div.book')
        
        if (el.className === 'font-size font-size_small') {
            divBook.classList.add('book_fs-small')
            divBook.classList.remove('book_fs-big')
            linkFontSize.forEach(lk => {
                if (lk.className === 'font-size font-size_small') {
                    lk.classList.add('font-size_active')
                    console.log('success');
                } else {
                    lk.classList.remove('font-size_active')
                }
            })
        } else if (el.className === 'font-size font-size_big') {
            divBook.classList.add('book_fs-big')
            divBook.classList.remove('book_fs-small')
            linkFontSize.forEach(lk => {
                if (lk.className === 'font-size font-size_big') {
                    lk.classList.add('font-size_active')
                } else {
                    lk.classList.remove('font-size_active')
                }
            })
        } else {
            divBook.className = 'book'
            linkFontSize.forEach(lk => {
                if (lk.className === 'font-size') {
                    lk.classList.add('font-size_active')
                } else {
                    lk.classList.remove('font-size_active')
                }
        })
    }
})
})