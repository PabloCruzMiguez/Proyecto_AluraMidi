function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play()
}
// Para las clases utilizamos el . (punto) y para los identidicadores usamos # (id)
// NO se deben poner los parentesis
 document.querySelector('.tecla_pom').onclick = playSonidoPom;

