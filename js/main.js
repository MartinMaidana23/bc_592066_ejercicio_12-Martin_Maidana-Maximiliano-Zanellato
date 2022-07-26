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
    apellido = document.querySelector('#apellido').value
    segundoApellido = document.querySelector('#segundoApellido').value
    integrante1 = new Integrante1(nombre, segundoNombre, apellido, segundoApellido)
    console.log(integrante1);
    agregar1()
    stringI1()
    mostrarNombres()
}

function capturarI2() {
    function Integrante2(nombre2, segundoNombre2, apellido2, segundoApellido2) {
        this.nombre2=nombre2
        this.segundoNombre2=segundoNombre2
        this.apellido2=apellido2
        this.segundoApellido2=segundoApellido2
    }

    nombre2 = document.querySelector('#nombre2').value
    segundoNombre2 = document.querySelector('#segundoNombre2').value
    apellido2 = document.querySelector('#apellido2').value
    segundoApellido2 = document.querySelector('#segundoApellido2').value

    integrante2 = new Integrante2(nombre2, segundoNombre2, apellido2, segundoApellido2)
    agregar2()
    stringI2()
    mostrarNombres()
    console.log(integrante2);
}

let integrantes = []

function agregar1() {
    integrantes.push(integrante1)
}

function agregar2() {
    integrantes.push(integrante2)
}

if (segundoNombre!=='') {
    segundoNombre= ''+segundoNombre+''
}else{
    segundoNombre= ' '
}

function stringI1() {
    primerIntegrante=integrantes[0].nombre+" "+integrantes[0].segundoNombre+" "+integrantes[0].apellido+" "+integrantes[0].segundoApellido
}

function stringI2() {
    segundoIntegrante=integrantes[1].nombre2+" "+integrantes[1].segundoNombre2+" "+integrantes[1].apellido2+" "+integrantes[1].segundoApellido2
}

function mostrarNombres() {
    console.log
    (`
        -----
        Integrante1: ${primerIntegrante}
        Integrante2: ${segundoIntegrante}
        -----
    `);
}

btn1.addEventListener('click', capturarI1)
btn2.addEventListener('click', capturarI2)





