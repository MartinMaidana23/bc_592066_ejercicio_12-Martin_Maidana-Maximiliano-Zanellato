                                    /* PARTE 1 */
console.log(titulo = document.querySelector("title").textContent)
console.log(principal = document.querySelector("h1").textContent)

                                    /* PARTE 2 */
let nombre = ''
let segundoNombre=''
let apellido=''
let segundoApellido=''

function btnCompletarI1() {
    //document.querySelector('btn').preventDefault()
    nombre = document.querySelector('#nombre').textContent
    segundoNombre = document.querySelector('#segundoNombre').textContent
    apellido = document.querySelector('#apellido').textContent
    segundoApellido = document.querySelector('#segundoApellido').textContent
    console.log(nombre);
}

let btn1 = document.querySelector('#integrante1')

btn1.addEventListener('click', btnCompletarI1)



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
    colorElegido = prompt("Ingrese un color para destacar los nombres que coinciden: ")
} else {
    console.log(`No hubo coincidencias`)
}


                        // CAMBIO DE COLOR A LOS DUPLICADOS //

for (i = 0; i<duplicados.length;i++) {
    const tomarElementos = document.getElementsByClassName(`${duplicados[i]}`);
    for (x = 0; x<tomarElementos.length;x++) {
        tomarElementos[x].style.color = `${colorElegido}`
    }
    //console.log(tomarElementos)
}
const {coin1,coin2,coin3} = [duplicados]
//console.log(coin1)

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
