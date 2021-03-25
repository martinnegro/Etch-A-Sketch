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
    let cant = prompt('Ingrese cantidad por lado\n(max 100)');
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



function cambiacolor(){
    this.style.backgroundColor = "red";
}
function pasaMouse() {
const quads = Array.from(document.querySelectorAll('.quads'));
quads.forEach( quads => {
    quads.addEventListener('mousemove',cambiacolor)
})
}