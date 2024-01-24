let numeroSecreto = 0;//variabel global
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax= 10;

function asignarTextoElemento(elemento, texto){ //se crea una funcion para reducir codigo al momento de seleccionar el tag a editar en HTML
    let elementoHTML = document.querySelector(elemento); //con el document se establece un puente con HTML
    elementoHTML.innerHTML = texto; //inserta en HTML 
    return;
}
function verificarIntento(){ //una funcion es un bloque de codigo que realiza una accion
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//se obtiene el input conforme al ID en HTML y su valor
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');//se activa el boton nuevo juego al acertar y se remueve el parametro disabled
    } else {
        //EL USUARIO NO ACERTO
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    let numeroGenerado=Math.floor(Math.random()*numeroMax)+1; //vvariable local
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya se sortaron todos los números posibles');
    }else{

    //Si el numro generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMax}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //generar el num aleatorio
    //Inicializar el num de intentos
    condicionesIniciales()
    //desactivar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
