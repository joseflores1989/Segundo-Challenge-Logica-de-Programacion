var listaPalabras = ["CARRO, SALCHICHA, AMIGO, LOMBRIZ"];

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var botonIniciarJuego = document.querySelector("#iniciar-juego");

botonIniciarJuego.addEventListener("click", function(event){
    var palabraElegida = elegirPalabra(listaPalabras);
    var contador = 0;
    //Cambio de pantalla
    document.addEventListener("keydown", (event) =>{
        var keyValue = event.key;
        if(validarLetra(keyValue)){
            contador ++;
            indicesLetraIngresada = buscarLetra(keyValue, palabraElegida);
    
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

