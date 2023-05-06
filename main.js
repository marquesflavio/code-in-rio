const btn = document.querySelector('.cabecalho__nav__menu');
const enviar = document.querySelector('.enviar');
const menu = document.querySelectorAll('.cabecalho__nav__link')

btn.addEventListener('click', ()=>{
    menu.forEach(() => {
        if(menu.classList.contains('hide')){
            menu.classList.remove('hide')
            menu.classList.add('show')
        } else {
            menu.classList.remove('show')
            menu.classList.add('hide')
        }
    })
})


function submeter() {
    enviar.addEventListener('click', () =>{
        alert('Obrigado por sua mensagem!')

    })
}
