var listaPalabras = ["CARRO", "SALCHICHA", "AMIGO", "LOMBRIZ"];

var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var botonIniciarJuego = document.querySelector("#iniciar-juego");

function borrar(div){
    var divSeleccionada = document.querySelector(div);
    divSeleccionada.innerHTML = "";
}

botonIniciarJuego.addEventListener("click", function(event){
    vaciarMsj("#msj-correcto");
    var contadorErrores = 0;
    var contadorAciertos = 0;
    vaciarPantalla();
    var palabraElegida = crearTableroConAnimación();
    var acumLetraIncorrecta = 0;
    var listaLetrasIncorrectas = [];
    document.addEventListener("keydown", (event) =>{
        var keyValue = event.key;
        var alturaLetrasIncorrectas = 500;
        var xLetrasIncorrectas = 500;
        var xPosInit = 260;
        if(validarLetra(keyValue) && contadorErrores < 9){
            var indicesLetraIngresada = buscarLetra(keyValue, palabraElegida);
            console.log(indicesLetraIngresada);
            if(indicesLetraIngresada.length > 0){
                for(var i = 0; i < indicesLetraIngresada.length; i++){
                    dibujarLetra(keyValue, (xPosInit + 100*indicesLetraIngresada[i]) , 690);
                    contadorAciertos++;
                }
            }else if(!listaLetrasIncorrectas.includes(keyValue)){
                dibujarLetra(keyValue, xLetrasIncorrectas + acumLetraIncorrecta, alturaLetrasIncorrectas);
                acumLetraIncorrecta += 60;
                contadorErrores++;
                listaLetrasIncorrectas.push(keyValue);
                dibujarAhorcado(contadorErrores);
            }  
        }
        if (contadorAciertos == palabraElegida.length){
            dibujarFinDelJuego("Felicidades, ganaste", "green");
            contadorErrores = 10;
            return;
        }
        if (contadorErrores == 9){
            dibujarFinDelJuego("Fin del juego", "red");
            return;
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

