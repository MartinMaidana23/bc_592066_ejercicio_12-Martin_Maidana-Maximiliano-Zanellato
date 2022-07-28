                                    /* PARTE 1 */
console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato')
console.log(titulo = document.querySelector("title").textContent)

                                    /* PARTE 2 */

const contenedor = document.querySelector("div")

const integrantes = [
    {nombre: "Martin", segundonombre: "", apellido: "Maidana", segundoapellido:"" },
    {nombre: "Maximiliano", segundonombre: "", apellido: "Zanellato", segundoapellido: ""}
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
contenedor.appendChild(lista_1)

crearDT_DD_lista1("Primer Nombre",integrantes[0].nombre)
crearDT_DD_lista1("Segundo Nombre",integrantes[0].segundonombre)
crearDT_DD_lista1("Primer Apellido",integrantes[0].apellido)
crearDT_DD_lista1("Segundo Apellido",integrantes[0].segundoapellido)



const h2_2 = document.createElement("h2")
h2_2.className = "integrante2"

h2_2.textContent = "Segundo Integrante"
contenedor.appendChild(h2_2)

const lista_2 = document.createElement("dl")
contenedor.appendChild(lista_2)

crearDT_DD_lista2("Primer Nombre",integrantes[1].nombre)
crearDT_DD_lista2("Segundo Nombre",integrantes[1].segundonombre)
crearDT_DD_lista2("Primer Apellido",integrantes[1].apellido)
crearDT_DD_lista2("Segundo Apellido",integrantes[1].segundoapellido)


                                    /* Parte 3 */
                   
                                    
let primerintegrante = integrantes[0].nombre+" "+integrantes[0].segundonombre+" "+integrantes[0].apellido+" "+integrantes[0].segundoapellido
let segundointegrante = integrantes[1].nombre+" "+integrantes[1].segundonombre+" "+integrantes[1].apellido+" "+integrantes[1].segundoapellido

console.log(`Integrante 1: ${primerintegrante}\nIntegrante 2: ${segundointegrante}`)






const [array1,array2] = integrantes

//console.log(array1)

let {nombre1,nombre2,apellido1,apellido2} = {array1}

//console.log(nombre1)

                        // COMPARACION DE NOMBRES Y APELLIDOS //

let datos = []
for (const {nombre: n, segundonombre: sn, apellido: a, segundoapellido: sa} of integrantes) {
    datos.push(n,sn,a,sa)
}

const listaOrdenada = datos.sort()
let duplicados = []
//console.log(datos.sort())
  
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
    //colorElegido = "red"
    colorElegido = prompt("Ingrese un color para destacar los nombre: ") 
} else {
    console.log(`No hubo coincidencias`)
}


                        // CAMBIO DE COLOR A LOS DUPLICADOS //

for (i = 0; i<duplicados.length;i++) {
    const tomarElementos = document.getElementsByClassName(`${duplicados[i]}`);
    for (x = 0; x<tomarElementos.length;x++) {
        tomarElementos[x].style.color = `${colorElegido}`
    }
    console.log(tomarElementos)
}
