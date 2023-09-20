const validarClave = (clave) =>{
    if (clave.length < 5){
        return true
    } 
    else{
        return false
    }
}

alert("Bienvenido a nuestra botanica online")
const USUARIO = prompt("Ingrese su Usuario")
let clave = prompt("Ingrese una contraseña con al menos 5 caracteres")

while (validarClave(clave)){
    clave = prompt("Error la contraseña ingresada no cumple con la cantidad de caracteres requeridos. Por favor ingrese una contraseña nueva")
}

alert("Bienvenido " + USUARIO  +  " ahora vamos a pedirte algunos datos para saber más sobre vos:");

const ALERGIA = prompt("¿Es alergico/a a alguna planta o elemento que las componga?")
const EDAD = prompt("Indica cuantos años tenes")
const COLOR = prompt("Seleccione su color favorito")

alert("Gracias " + USUARIO + " por responder esta leve encuesta, a continuación te haremos otras preguntas para seleccionar la mejor planta que se adecue a vos :)" )

const validarSeleccion = (seleccion, argumentos,cantidadSeleccion) =>{
    if(!isNaN(seleccion) && seleccion < 1 && seleccion > cantidadSeleccion){
        seleccion = parseInt(prompt("ERROR. Intente de nuevo. " + argumentos))
        validarSeleccion(seleccion,argumentos)
    } else {
        return seleccion
    }
}

const SELECCION_LUZ = "Luz solar, Si dispones de 6 o mas horas de sol directo coloca (1) si dispones de 5 a 4 horas de sol directo coloca, (2) si dispones de 3 a 2 horas de sol directo coloca, (3) si dispones de menos de 2 horas de sol directo coloca (4)"
let luzSolar = parseInt(prompt(SELECCION_LUZ))
validarSeleccion(luzSolar,SELECCION_LUZ,4)

const SELECCION_ESPACIO = "Espacio disponible, Si usted cuenta con un patio con tierra coloque (1), Si usted cuenta con terraza pero no tiene un suelo con tierra coloque (2), Si usted tiene un balcón coloque (3), Si usted no cuenta con un espacio al exterior coloque (4)"
let espacioDisponible = parseInt(prompt(SELECCION_ESPACIO))
validarSeleccion(espacioDisponible,SELECCION_ESPACIO,4)



