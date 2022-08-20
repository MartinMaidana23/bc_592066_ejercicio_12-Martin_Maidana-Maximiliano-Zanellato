console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato')
console.log(titulo = document.querySelector("title").textContent)

                                   
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

let int1 = Array.from(document.querySelectorAll('.int1'))
let int2 = Array.from(document.querySelectorAll('.int2'))

let nombres1 = [];
let apellidos1 = [];
let nombreCompleto1 = []

let nombres2 = [];
let apellidos2 = [];
let nombreCompleto2 = []


let duplicadosNombres=[]
let duplicadosApellidos=[]

const leerForm1 = () =>{
    int1.forEach(e=>{
        if (e.value!='') {
            e.className=e.value.toLowerCase()
        }
    })
    array1()
    consola()
    if (nombreCompleto2.length>0) {
        compararNombres()
    }

    if (nombreCompleto2.length>0) {
        let respuesta = prompt('¿Desea comparar los apellidos? \n 0: No || 1: Si')
        if (respuesta === '1') {
            compararApellidos()
        }
    }
    
}

const leerForm2 = () =>{
    int2.forEach(e=>{
        if (e.value!='') {
            e.className=e.value.toLowerCase()
        }
    })
    array2()
    consola()
    if (nombreCompleto1.length>0) {
        compararNombres()
    }

    if (nombreCompleto1.length>0) {
        let respuesta = prompt('¿Desea comparar los apellidos? \n 0: No || 1: Si')
        if (respuesta === '1') {
            compararApellidos()
        }
    }
}

const array1 = () =>{

    nombres1 = [int1[0].value, int1[1].value].filter(x=>x.length>0)
    apellidos1 = [int1[2].value.toUpperCase(), int1[3].value.toUpperCase()].filter(x=>x.length>0)

    nombreCompleto1 = nombreCompleto1.concat(nombres1, apellidos1)
    
    
}

const array2 = () =>{
    nombres2 = [int2[0].value, int2[1].value].filter(x=>x.length>0)
    apellidos2 = [int2[2].value.toUpperCase(), int2[3].value.toUpperCase()].filter(x=>x.length>0)

    nombreCompleto2 = nombreCompleto2.concat(nombres2, apellidos2)
}
 
const consola = () =>{
    if (nombreCompleto2[0]==="") {
        console.log(`
--------
Primer Integrante: "${nombreCompleto1.join(' ')}"
Segundo Integrante: ""
--------
        `);
    }else if (nombreCompleto1[0]===""){
        console.log(`
--------
Primer Integrante: ""
Segundo Integrante: "${nombreCompleto2.join(' ')}"
--------
        `);
    }else {
        console.log(`
--------
Primer Integrante: "${nombreCompleto1.join(' ')}"
Segundo Integrante: "${nombreCompleto2.join(' ')}"
--------
        `);
    }
}

const compararNombres = () =>{
    for (let i = 0; i < nombres1.length; i++ ){
        for(let x = 0; x<nombres2.length; x++){
            if (nombres1[i]===nombres2[x]) {
                duplicadosNombres.push(nombres1[i])
            }
        }
    }

    if (duplicadosNombres != "") {
        console.log(`Hubo coincidencias en los nombres: "${duplicadosNombres.join(', ')}"`)
        alert(`Hubo coincidencias en los nombres: "${duplicadosNombres.join(', ')}"`)
    } else {
        console.log(`No hubo coincidencias en los nombres`)
        alert(`No hubo coincidencias en los nombres`)
    }
}

const compararApellidos = () =>{
    for (let i = 0; i < apellidos1.length; i++ ){
        for(let x = 0; x<apellidos2.length; x++){
            if (apellidos1[i]===apellidos2[x]) {
                duplicadosApellidos.push(apellidos1[i])
            }
        }
    }

    if (duplicadosApellidos != "") {
        console.log(`Hubo coincidencias en los apellidos: "${duplicadosApellidos.join(', ')}"`)
        alert(`Hubo coincidencias en los apellidos: "${duplicadosApellidos.join(', ')}"`)
    } else {
        console.log(`No hubo coincidencias en los apellidos`)
        alert(`No hubo coincidencias en los apellidos`)
    }
}



btn1.addEventListener('click', leerForm1)
btn2.addEventListener('click', leerForm2)