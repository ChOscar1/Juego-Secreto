    //Variables
    let numeroMaximoPosible = 100;
    let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    let numeroUsuario = 0;
    let numeroIntentos = 1;
    //let palabaVeces = 'vez';
    let maximosIntentos = 3;
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}, por favor:`));//para pedir algo al usuario
        
        console.log(typeof(numeroUsuario));
        if(numeroUsuario == numeroSecreto){
            alert(`Acertaste, el número es:  ${numeroUsuario}, lo hiciste en ${numeroIntentos} ${numeroIntentos == 1 ? 'vez' : 'veces'}`);//s imprime el valor de numusuario
        }else{
            if(numeroUsuario > numeroSecreto){
                alert("el número secreto es menor");
            } else {
                alert("el número secreto es mayor")
            }
            numeroIntentos++;
           // palabaVeces = 'veces'; //para qu despues del 1er intento diga veces
            if(numeroIntentos > maximosIntentos){
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                break;//saca del bucl while
            }
            //alert("Lo siento, no has acertado");
        }
    }
