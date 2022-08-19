                                    /* PARTE 1 */
console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato')
console.log(titulo = document.querySelector("title").textContent)
                                    
                                                                        /* PARTE 2 */
                                    
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
                                    
                                    
function capturarI1() {
function Integrante1(nombre, segundoNombre, apellido, segundoApellido) {
    this.nombre=nombre
    this.segundoNombre=segundoNombre
    this.apellido=apellido
    this.segundoApellido=segundoApellido
}
nombre = document.querySelector('#nombre').value
segundoNombre = document.querySelector('#segundoNombre').value
apellido = document.querySelector('#apellido').value.toUpperCase()
segundoApellido = document.querySelector('#segundoApellido').value.toUpperCase()
integrante1 = new Integrante1(nombre, segundoNombre, apellido, segundoApellido)
strings()
comparacion()      
}

function capturarI2() {
function Integrante2(nombre2, segundoNombre2, apellido2, segundoApellido2) {
    this.nombre=nombre2
    this.segundoNombre=segundoNombre2
    this.apellido=apellido2
    this.segundoApellido=segundoApellido2
}

nombre = document.querySelector('#nombre2').value
segundoNombre = document.querySelector('#segundoNombre2').value
apellido = document.querySelector('#apellido2').value.toUpperCase()
segundoApellido = document.querySelector('#segundoApellido2').value.toUpperCase()
integrante2 = new Integrante2(nombre, segundoNombre, apellido, segundoApellido)
strings()
comparacion()
}

let integrantes1 = []
let integrantes2 = []

function strings() {

    function integrante(nombre, segundoNombre, apellido, segundoApellido) {
        if (segundoNombre==='') {
            let nombreCompleto = nombre + ' ' + apellido + ' '+ segundoApellido
            return nombreCompleto.trim()
        } else {
            let nombreCompleto = nombre + ' '+  segundoNombre+ ' ' + apellido+' ' + segundoApellido
            return nombreCompleto.trim()
        }
    }

    let primerIntegrante = integrante(integrante1.nombre, integrante1.segundoNombre,integrante1.apellido, integrante1.segundoApellido)
    let segundoIntegrante =integrante(integrante2.nombre, integrante2.segundoNombre, integrante2.apellido, integrante2.segundoApellido)
    console.log(`
    ---
    Integrante 1: "${primerIntegrante}"
    Integrante 2: "${segundoIntegrante}"
    ---
    `);
    
}

btn1.addEventListener('click', capturarI1)
btn2.addEventListener('click', capturarI2)



function comparacion() {
let datos = []
let integrantes = []


if (integrantes1.length > 1) {
    integrantes1.pop()
}
if (integrantes2.length > 1) {
    integrantes2.pop()
}


if (integrantes1 != '') {
    integrantes = integrantes1.concat(integrantes2)
} 
if (integrantes2 != '') {
    integrantes = integrantes2.concat(integrantes1)
}

integrantes = integrantes.filter(element => {
    return element != undefined
})

for (const {nombre: n, segundoNombre: sn, apellido: a, segundoApellido: sa} of integrantes) {
    datos.push(n,sn,a,sa)
}

datos = datos.filter(element => {
    return element != undefined
})

listaOrdenada = datos.sort()
duplicados = []

for (let i = 0; i < listaOrdenada.length; i++) {
    if (listaOrdenada[i + 1] === listaOrdenada[i]) {
        if (listaOrdenada[i] != '') {
        duplicados.push(listaOrdenada[i])
        } 
    }
}

if (duplicados != '') {
    console.log(`Hubo coincidencias`)
} else {
    console.log(`No hubo coincidencias`)
}

console.log(integrantes1);

}