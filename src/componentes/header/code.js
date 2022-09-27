var hamburguesa = document.getElementById('hamburguesa')
var menu = document.getElementById('menu')

hamburguesa.addEventListener('click', function(){
    menu.classList.toggle('abrir')
})