function validarTexto(string){
    var caracteresValidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var contieneCaracterInvalido = false;
    if (string.length == 0){
        contieneCaracterInvalido = true;
    }else{
        for(var i=0; i < string.length; i++){
            if(!caracteresValidos.includes(string[i])){
                contieneCaracterInvalido = true;
            }
        }
    }

    if(contieneCaracterInvalido){
        return "Ingrese solamente mayúsculas sin tilde";
    }else{
        return "";
    }
}

function crearMsjError(msjError){
    if(msjError.length > 0){
        var elementoError = document.querySelector("#msj-error");
        elementoError.textContent = msjError;
    }
}

function vaciarMsj(id){
    var mensajeError = document.querySelector(id);
    mensajeError.innerHTML = "";
}

function msjPalabraCorrecta(nuevaPalabra){
    var msjPalabraCorrecta = document.querySelector("#msj-correcto");
    msjPalabraCorrecta.innerHTML = "La palabra " + nuevaPalabra + " fue agregada con éxito"
}

