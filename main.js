const btn = document.querySelector('.cabecalho__nav__menu')

btn.addEventListener('click', () => {
    let menu = document.querySelector('.cabecalho__nav__link')

    if(menu.classList.contains('hide')){ //se o menu tiver a class hide na sua "lista de classes" ele:
        menu.classList.add('show')//adiciona o show, ao click ou
        menu.classList.remove('hide')
    } else{
        menu.classList.add('hide')// do contrário, ele adiciona a class hide.
        menu.classList.remove('show')
    }
})