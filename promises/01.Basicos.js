var miPromesa = new Promise(
    //Recibe único argumento:
    //Función ejecutora (executor function)
    function(resolve, reject){
    //Cuerpo de la función ejecutora
    var operacionExitosa = true;
    
    if(operacionExitosa) {
        //Cambia el estado de la promesa a "pending" a "rejected"
        resolve('Los datos se procesaron correctamente');
    }else {
      reject('La operación falló')

    }
    }
)

//then (): registra una función que se ejecutará cuando la promesa pase al estado fulfilled (cumplida)
//catch(): Registra una función que maneja rechazos y errores que se ejecutará cuando la promesa pase al
//estado rejected (rechazado)
miPromesa.then(
 function(mensajeRecibido){
 console.log(mensajeRecibido)
 cosole.log("Resultado capturado en then(): " + mensajeRecibido);
 }
 ).catch(
    function(motivoError) {
        console.log("Resultado capturado en catch(): " + motivoError);

})

