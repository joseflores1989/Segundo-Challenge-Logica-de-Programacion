function elegirPalabra(lista){
    var indicePalabra = Math.floor(Math.random()*lista.length);
    console.log(indicePalabra);
    var palabraElegida = lista[indicePalabra];
    console.log(palabraElegida);
    return palabraElegida;
}

function validarLetra(letraIngresada){
    var listaLetrasValidas = "ABCDEFGHIJKLMNOPQRSTUVWYXZÑ";
    return listaLetrasValidas.includes(letraIngresada);
}

function buscarLetra(letra, palabra){
    listaIndices=[];
    for (var i = 0; i < palabra.length; i++){
        if(palabra[i] == letra){
            listaIndices.push(i);
        }
    }
    return listaIndices;
}


