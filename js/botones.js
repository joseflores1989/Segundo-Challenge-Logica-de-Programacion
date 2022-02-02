var listaPalabras = ["CARRO", "SALCHICHA", "AMIGO", "LOMBRIZ"];

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var botonIniciarJuego = document.querySelector("#iniciar-juego");

function borrar(div){
    var divSeleccionada = document.querySelector(div);
    divSeleccionada.innerHTML = "";
}

botonIniciarJuego.addEventListener("click", function(event){
    
    var palabraElegida = elegirPalabra(listaPalabras);
    var contador = 0;
    //document.body.innerHTML = "";
    vaciarPantalla()
    crearTablero(palabraElegida.length);

    document.addEventListener("keydown", (event) =>{
        var keyValue = event.key;
        if(validarLetra(keyValue)){
            contador ++;
            var indicesLetraIngresada = buscarLetra(keyValue, palabraElegida);
            if(indicesLetraIngresada){
                var xPosInit = 360;
                for(var i = 0; i < indicesLetraIngresada.length; i++){
                    dibujarLetra(keyValue, (xPosInit + 100*indicesLetraIngresada[i]) , 690)
                }
            }
    
        }
        
        
        
    }, false);

})

botonAgregarPalabra.addEventListener("click", function(event){
    var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");
    var nuevaPalabra = inputNuevaPalabra.value;
    var dialogoError = validarTexto(nuevaPalabra);
    if(dialogoError.length > 0){
        crearMsjError(dialogoError);
        vaciarMsj("#msj-correcto");
        inputNuevaPalabra.value = "";
        return;
    }
    listaPalabras.push(nuevaPalabra);
    inputNuevaPalabra.value = "";
    msjPalabraCorrecta(nuevaPalabra);
    vaciarMsj("#msj-error");
    
})

