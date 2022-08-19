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
    agregar1()
    stringI1()
    mostrarNombres()
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
    apellido = document.querySelector('#apellido2').value
    segundoApellido = document.querySelector('#segundoApellido2').value
    integrante2 = new Integrante2(nombre, segundoNombre, apellido, segundoApellido)
    agregar2()
    stringI2()
    mostrarNombres2()
    comparacion()
}

let integrantes1 = []
let integrantes2 = []

function agregar1() {
    integrantes1.splice(0,0,integrante1)
}

function agregar2() {
    integrantes2.splice(0,0,integrante2)
}

function stringI1() {
    primerIntegrante=`${integrantes1.nombre}+ +${integrantes1.segundoNombre}+ +${integrantes1.apellido}+ +${integrantes1.segundoApellido}`
}

function stringI2() {
    segundoIntegrante=`${integrantes2.nombre}+ +${integrantes2.segundoNombre}+ +${integrantes2.apellido}+ +${integrantes2.segundoApellido}`
}


function mostrarNombres() {
    (`
        -----
        Integrante1: ${primerIntegrante}
        -----
    `);
}
function mostrarNombres2() {
    (`
        -----
        Integrante2: ${segundoIntegrante}
        -----
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
/*         colorElegido = prompt("Ingrese un color para destacar los nombre: ") */
        console.log(duplicados)
    } else {
        console.log(`No hubo coincidencias`)
    }

}