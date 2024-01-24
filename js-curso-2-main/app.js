let titulos = document.querySelector('h1');
parrafos.innerHTML = "Hora del desafio";

function clickEnConsola(){
    console.log("El boton fue clicado");
}
function clickenPrompt(){
    let ciudad = '';

    ciudad=prompt("Dame una ciudad de Brasil: ");
    alert(`Estuve en: ${ciudad} y me acorde de ti.`);
}

function clickEnAlert(){
    alert("Yo amo JS");
}

function clickEnSuma(){
    let numero1 = 0;
    let numero2 = 0;
    let suma = 0;
    numero1=parseInt(prompt("Dame el primer numero a sumar: "));
    numero2=parseInt(prompt("Dame el segundo numero a sumar: "));
    suma=numero1+numero2;
    alert(`La suma de: ${numero1} y de ${numero2} es: ${suma}`);
}