const btn = document.querySelector('.cabecalho__nav__menu');
const enviar = document.querySelector('.enviar');

btn.addEventListener('click', ()=>{
    const menu = document.querySelectorAll('.cabecalho__nav__link')
    menu.forEach((item) => {
        if (item.classList.contains('hide')){
            item.classList.remove('hide')
            item.classList.add('show')
        } else {
            item.classList.remove('show')
            item.classList.add('hide')
        }
    })
})


function submeter() {
    enviar.addEventListener('click', () =>{
        alert('Obrigado por sua mensagem!')

    })
}
