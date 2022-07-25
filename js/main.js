<<<<<<< HEAD
console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato');
console.log(document.querySelector('title').textContent);

let nombres = document.querySelectorAll('.nombre')
let segundoNombre = document.querySelectorAll('.segundoNombre')
let apellidos=document.querySelectorAll('.apellido')
let segundoApellido=document.querySelectorAll('.segundoApellido')

let [nombre1, nombre2] = nombres
nombre1=nombre1.textContent
nombre2=nombre2.textContent
let [segundoNombre1, segundoNombre2 ]=segundoNombre
segundoNombre1=segundoNombre1.textContent
segundoNombre2=segundoNombre2.textContent
let [apellido1, apellido2]=apellidos
apellido1=apellido1.textContent
apellido2=apellido2.textContent
let [segundoApellido1, segundoApellido2]=segundoApellido
segundoApellido1=segundoApellido1.textContent
segundoApellido2=segundoApellido2.textContent

if (segundoNombre1==='') {
    segundoNombre1=' '
} else {
    segundoNombre1=' '+segundoNombre1 +' '
}

if (segundoApellido1==='') {
    segundoApellido1=' '
} else {
    segundoApellido1=' '+segundoApellido1
}

if (segundoNombre2==='') {
    segundoNombre2=' '
} else {
    segundoNombre2=' '+segundoNombre2 +' '
}

if (segundoApellido2==='') {
    segundoApellido2=' '
} else {
    segundoApellido2=' '+segundoApellido2
}

let integrante1 = [nombre1 + segundoNombre1 + apellido1.toUpperCase() + segundoApellido1.toUpperCase()]

let integrante2 = [nombre2 + segundoNombre2 + apellido2.toUpperCase() + segundoApellido2.toUpperCase()]

console.log(
`-----
Integrante 1: "${integrante1}"
Integrante 2: "${integrante2}"
-----
`);






















































    

=======
                                    /* PARTE 1 */
console.log(titulo = document.querySelector("title").textContent)
console.log(principal = document.querySelector("h1").textContent)

                                    /* PARTE 2 */

const contenedor = document.querySelector("div")

/* const integrantes = {
    primernombre: ['Martín', 'Maximiliano'],
    segundonombre: ['', ''],
    primerapellido: ['Maidana', 'Zanellato'],
    segundoapellido: ['', '']
} */

const integrantes = [
    {nombre: "Matias", segundonombre: "Maximiliano", apellido: "Maidana", segundoapellido:"" },
    {nombre: "Maximiliano", segundonombre: "", apellido: "Zanellato", segundoapellido: "Maidana"}
    ]

                                    /* Integrante 1 */
                                    
function crearDT_DD_lista1(dato1,dato2) {
    const dt = document.createElement("dt")
    dt.textContent = dato1
    lista_1.appendChild(dt)
    const dd = document.createElement("dd")    
    dd.className = dato2
    dd.textContent = dato2
    dt.appendChild(dd)
}

function crearDT_DD_lista2(dato1,dato2) {
    const dt = document.createElement("dt")
    dt.textContent = dato1
    lista_2.appendChild(dt)
    const dd = document.createElement("dd")
    dd.className = dato2
    dd.textContent = dato2
    dt.appendChild(dd)
}


const h2_1 = document.createElement("h2")
h2_1.className = "integrante1"

h2_1.textContent = "Primer Integrante"
contenedor.appendChild(h2_1)

const lista_1 = document.createElement("dl")
h2_1.appendChild(lista_1)

crearDT_DD_lista1("Primer Nombre",integrantes[0].nombre)
crearDT_DD_lista1("Segundo Nombre",integrantes[0].segundonombre)
crearDT_DD_lista1("Primer Apellido",integrantes[0].apellido)
crearDT_DD_lista1("Segundo Apellido",integrantes[0].segundoapellido)



const h2_2 = document.createElement("h2")
h2_2.className = "integrante2"

h2_2.textContent = "Segundo Integrante"
contenedor.appendChild(h2_2)

const lista_2 = document.createElement("dl")
h2_2.appendChild(lista_2)

crearDT_DD_lista2("Primer Nombre",integrantes[1].nombre)
crearDT_DD_lista2("Segundo Nombre",integrantes[1].segundonombre)
crearDT_DD_lista2("Primer Apellido",integrantes[1].apellido)
crearDT_DD_lista2("Segundo Apellido",integrantes[1].segundoapellido)


                                    /* Parte 3 */
                   
                                    
let primerintegrante = integrantes[0].nombre+" "+integrantes[0].segundonombre+" "+integrantes[0].apellido+" "+integrantes[0].segundoapellido
let segundointegrante = integrantes[1].nombre+" "+integrantes[1].segundonombre+" "+integrantes[1].apellido+" "+integrantes[1].segundoapellido

console.log(`Integrante 1: ${primerintegrante}\nIntegrante 2: ${segundointegrante}`)






const [array1,array2] = integrantes

console.log(array1)

let {nombre1,nombre2,apellido1,apellido2} = {array1}

console.log(nombre1)

                        // COMPARACION DE NOMBRES Y APELLIDOS //

let datos = []
for (const {nombre: n, segundonombre: sn, apellido: a, segundoapellido: sa} of integrantes) {
    datos.push(n,sn,a,sa)
}

const listaOrdenada = datos.sort()
let duplicados = []
console.log(datos.sort())
  
for (let i = 0; i < listaOrdenada.length; i++) {
    if (listaOrdenada[i + 1] === listaOrdenada[i]) {
        if (listaOrdenada[i] != "") {
        duplicados.push(listaOrdenada[i])
        } 
    }
}

                        // COINCIDENCIAS //

if (duplicados != "") {
    console.log(`Hubo coincidencias`)
    console.log(duplicados)
    colorElegido = "red"
 /*    colorElegido = prompt("Ingrese un color para destacar los nombre: ") */
} else {
    console.log(`No hubo coincidencias`)
}


                        // CAMBIO DE COLOR A LOS DUPLICADOS //

for (i = 0; i<duplicados.length;i++) {
    const tomarElementos = document.getElementsByClassName(`${duplicados[i]}`);
    for (x = 0; x<tomarElementos.length;x++) {
        tomarElementos[x].style.backgroundColor = `${colorElegido}`
    }
    console.log(tomarElementos)
}
const {coin1,coin2,coin3} = [duplicados]
console.log(coin1)

/* document.getElementById("body").style.backgroundColor = "red"; */
/* const colores = document.getElementsByClassName(duplicados)
console.log(colores) */


/* const index = integrantes.find((element) => element.nombre === 'Maidana' );
console.log(index) */


/* const cambiocolor = document.querySelectorAll(duplicados[0])

console.log(cambiocolor) */
/* 
console.log(Object.values(integrantes[1]))
Object.values(integrantes[0]).find("Maidana") */
>>>>>>> max
