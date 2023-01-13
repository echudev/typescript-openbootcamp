///////////////////////////////////////////////
//CLASE 2 - Tipos y variables
/////////////////////////////////////////////

// Declaración de variables:
let nombre: string = 'Ezequiel'

//instanciación multiple de variables
let a: string, b: boolean, c: number
a = 'typescript'
b = true
c = 8

//builtIn types: number, string, boolean, void, null y undefined

//Tipos más complejos
//Lista de cadenas de texto
let listaTareas: string[] = ['tarea1', 'tarea2', 'tarea3']

//combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, 'un texto', true, 17]

//enumerados
enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

let estadoTarea: Estados = Estados.Completado //0

//enumerados: 'Completado' ahora vale 2, por lo que 
//'Incompleto' vale 3 y 'Pendiente' vale 4. 
enum Estados2 {
    "Completado" = 2,
    "Incompleto",
    "Pendiente"
}

let estadoTarea2: Estados = Estados.Completado //2

//enumerados: 
enum Estados3 {
    "Completado" = 'C',
    "Incompleto" = 'I',  
    "Pendiente" = 'P'
}

let estadoTarea3: Estados = Estados.Pendiente // 'P'


//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}
//Creamos variables que sigan la interface Tarea:

let tarea1: Tarea = {
    nombre: 'Tarea 1',
    estado: Estados.Pendiente,
    urgencia: 10
}

//Si al declarar la variable tarea 1 omitimos alguna de las propiedades de la interface nos va a devolver un error



//Types de Typescript
type Producto = {
    precio: number,
    nombre: string
}

let coche: Producto = {
    nombre: 'Audi',
    precio: 45000
}
//Una de las diferencias entre interface y type, es que type no se puede extender (hay más diferencias) 



////////////////////////////////////////////////////////////////////
//CLASE 3 - FUNCIONES
////////////////////////////////////////////////////////////////////

function saludar() {

    let nombre: string = 'Pumba'

    console.log(`hola ${nombre}`)
}

saludar()
