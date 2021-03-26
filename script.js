/* Al cargar, genera un grid de 16 por 16 
    y llama la función para el cambio de color */

for (let i = 0; i < 256; i++) {
    const contenedor = document.querySelector('#contenedor');
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('quads');
    contenedor.appendChild(cuadrado);
}

pasaMouse();


/* Alerta para ingresar la cantidad deseada
    al apretar el botón.
    Luego invoca la función para hacer los cambios con la cantidad */
const boton = document.querySelector("button");
boton.addEventListener('click',ingreseCantidad);

function ingreseCantidad() {
    let cant = prompt('Ingrese cantidad por lado\n(min 1 max 100)');
    if (cant < 1 || cant > 100 || isNaN(cant)) {
        ingreseCantidad();
    }
    cantidad(cant);
}


/* Borra divs del contenedor, 
    cambia la cantidad de column y row del grid
    agrega los nuevos div */
function cantidad(cant){
    const contenedor = document.querySelector('#contenedor');
    contenedor.textContent = '';
    contenedor.style.gridTemplateColumns = "repeat("+ cant + ", auto)";
    contenedor.style.gridTemplateRows = "repeat("+ cant + ", auto)";
    for (let i = 0; i < (cant * cant); ++i){
        const cuadrado = document.createElement('div');
        cuadrado.classList.add('quads');
        contenedor.appendChild(cuadrado);
    }
    pasaMouse();  // Vuelve a asignar el evento de cambio de color.
}


let lightness = 25;  
function cambiacolor(){
    let hue = Math.round(Math.random() * 360);
    let saturation = Math.round(Math.random() * 100); 
    if (lightness === 75) {lightness = 25}
        else {lightness = lightness + 5};
    this.style.backgroundColor = "hsl(" + hue +", " + saturation + "%, " + lightness + "%)";
    console.log(this.style.backgroundColor);
}
function pasaMouse() {
const quads = Array.from(document.querySelectorAll('.quads'));
quads.forEach( quads => {
    quads.addEventListener('mousemove',cambiacolor)
})
}