function mostrarTotal(montoTotal) {
    console.log("El total a pagar IVA incluido es: $" + montoTotal)
    
}

function calcularPrecioConIVA(precioBase, CallbackMostrar) {
    var iva = precioBase * 0.16;
    var total = precioBase + iva;

//Ejecutamos el callback pasandole como argumento el 'total'
CallbackMostrar(total);
}
calcularPrecioConIVA(100, mostrarTotal);