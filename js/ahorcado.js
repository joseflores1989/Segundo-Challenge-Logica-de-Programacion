function elegirPalabra(lista){
    var indicePalabra = Math.floor(Math.random()*lista.length);
    var palabraElegida = lista[indicePalabra];
    return palabraElegida;
}

function validarLetra(letraIngresada){
    var listaLetrasValidas = "ABCDEFGHIJKLMNOPQRSTUVWXÑ";
    var letraEsValida = false;
    if (listaLetrasValidas.includes(letraIngresada)){
        LetraEsValida = true;
    }
    return letraEsValida;
}

function buscarLetra(letra, palabra){
    listaIndices=[];
    for (var i = 0; i < palabra.length; i++){
        if(palabra[i] = letra){
            listaIndices.push(i);
        }
    }
    return listaIndices;
}
var listaPalabras = ["CARRO, SALCHICHA, AMIGO, LOMBRIZ"];

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var botonIniciarJuego = document.querySelector("#iniciar-juego");

