function crearPantalla(){
    return document.querySelector("canvas");
}


function crearPincel(color){
    var pantalla = crearPantalla();
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color;
    return pincel;
}

function crearTriangulo(x, y, base, color){
    var pincel = crearPincel(color);
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x + base, y);
    pincel.lineTo((x + base/2), (y - base/4));
    pincel.fill();
}

function hacerLineas(largo, cantidad){
    var pincel = crearPincel("black");
    var acum = 0;
    for(i = 0; i < cantidad; i++){
        pincel.fillRect(360 + acum, 693, largo, 7);
        acum = acum + largo + 50;
    }

}

function crearTablero(cantidadDeLetras){
    crearTriangulo(100, 700, 200, "black");
    crearTriangulo(130, 693, 140, "white");
    hacerLineas(50, cantidadDeLetras);
}

function vaciarPantalla(){
    document.getElementById("nueva-palabra").style.display = "none";
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("input-nueva-palabra").style.display = "none";
    
}

function dibujarLetra(letra, x, y){
    pincel = crearPincel("black");
    pincel.font="30pt Verdana";
    pincel.fillText(letra, x, y);
}