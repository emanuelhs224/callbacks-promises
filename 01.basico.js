function despedirse () {
    console.log("adios, hemos terminado la clase")
    
}

function iniciarProcesos(miCallback) {
    console.log('Iniciando el procesos princpal...')

    miCallback();
}

iniciarProcesos(despedirse);