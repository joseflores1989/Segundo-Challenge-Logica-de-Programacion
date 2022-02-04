function crearPantalla(){
    return document.querySelector("canvas");
}

function crearPincel(color){
    var pantalla = crearPantalla();
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color;
    return pincel;
}

function hacerLineas(cantidad, y){
    var pincel = crearPincel("black");
    var acum = 0;
    for(i = 0; i < cantidad; i++){
        pincel.fillRect(260 + acum, 693 + y, 50, 7);
        acum = acum + 100;
    }

}

function crearTriangulo(desplazamiento){
    pincel = crearPincel("black");
    pincel.strokeStyle = "black";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(0, 700 + desplazamiento);
    pincel.lineTo(200, 700 + desplazamiento);
    pincel.lineTo(100, 650 + desplazamiento);
    pincel.lineTo(0, 700 + desplazamiento);
    pincel.stroke();    
}

function limpiarPantalla(){
    pincel = crearPincel("black");
    pincel.clearRect(0, 0, 1200, 800);
}

function crearTablero(desplazamiento, cantidad, y){
    crearTriangulo(desplazamiento);
    hacerLineas(cantidad, y);
}

function actualizarPantalla(cantidad){
    limpiarPantalla();
    crearTablero(y, cantidad, y);
    if(y > 0){
        y--;
    }else{
        clearInterval(intervalo);
    }
}

var y = 100;
var intervalo = 0;

function crearTableroConAnimación(){  
    var palabraElegida = elegirPalabra(listaPalabras);
    //var y = 100 
    //intervalo = setInterval(actualizarPantalla, 5);
    intervalo = setInterval( function() { actualizarPantalla(palabraElegida.length); }, 5);
    return palabraElegida;
}

function vaciarPantalla(){
    document.getElementById("nueva-palabra").style.display = "none";
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("input-nueva-palabra").style.display = "none";
    
}

function dibujarLetra(letra, x, y){
    pincel = crearPincel("black");
    pincel.font="50pt Verdana";
    pincel.fillText(letra, x, y);
}

function dibujarFinDelJuego(frase, color){
    pincel = crearPincel(color);
    pincel.font="30pt Verdana";
    pincel.fillText(frase, 700, 400);
}

function dibujarLinea(xInit, yInit, xFinal, yFinal){
    pincel = crearPincel("black");
    pincel.strokeStyle = "black";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xInit, yInit);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
}

function dibujarCirculo(x, y, radio){
    pincel = crearPincel("black");
    pincel.strokeStyle = "black";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,Math.PI*2,true);
    pincel.stroke();
}
   

function dibujarAhorcado(contador){
    if(contador == 1){
        dibujarLinea(100, 650, 100, 100);
    }else if(contador == 2){
        dibujarLinea(100, 100, 300, 100);
    }else if(contador == 3){
        dibujarLinea(300, 100, 300, 150);
    }else if(contador == 4){
        dibujarCirculo(300,200,50);
    }else if(contador == 5){
        dibujarLinea(300, 250, 300, 500);
    }else if(contador == 6){
        dibujarLinea(300, 300, 400, 200);
    }else if(contador == 7){
        dibujarLinea(300, 300, 200, 200);
    }else if(contador == 8){
        dibujarLinea(300, 500, 400, 600);
    }else if(contador == 9){
        dibujarLinea(300, 500, 200, 600);
    }

}