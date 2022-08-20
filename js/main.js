                                    
console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato')
console.log(titulo = document.querySelector("title").textContent)

                                    
//ARMADO ARRAYS CON LOS NOMBRES

let int1 = Array.from(document.querySelectorAll('.int1'))
let int2 = Array.from(document.querySelectorAll('.int2'))

let nombres1 = [int1[0].innerText, int1[1].innerText];
let apellidos1 = [int1[2].innerText.toUpperCase(), int1[3].innerText.toUpperCase()];
let nombreCompleto1 = []
nombreCompleto1 = nombreCompleto1.concat(nombres1, apellidos1).filter(x=>x.length>0)

let nombres2 = [int2[0].innerText, int2[1].innerText];
let apellidos2 = [int2[2].innerText.toUpperCase(), int2[3].innerText.toUpperCase()];
let nombreCompleto2 = []
nombreCompleto2 = nombreCompleto2.concat(nombres2, apellidos2).filter(x=>x.length>0)


let duplicadosNombres=[]
let duplicadosApellidos=[]

int1.forEach(e=>{
    if (e.textContent!='') {
        e.className=e.textContent.toLowerCase()
    }
})
int2.forEach(e=>{
    if (e.textContent!='') {
        e.className=e.textContent.toLowerCase()
    }
})


// MOSTRAR EN CONSOLA LOS NOMBRES

console.log(`
--------
Primer Integrante: "${nombreCompleto1.join(' ')}"
Segundo Integrante: "${nombreCompleto2.join(' ')}"
--------

`);

//COMPARACION Y MOSTRAR DUPLICADO DE LOS NOMBRES

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
    colorElegido = prompt("Ingrese un color para destacar los nombre: ")

    for (i = 0; i<duplicadosNombres.length;i++) {
        const tomarElementos = document.getElementsByClassName(`${duplicadosNombres[i].toLowerCase()}`);
        for (x = 0; x<tomarElementos.length;x++) {
            tomarElementos[x].style.color = `${colorElegido}`
        }
    }
} else {
    console.log(`No hubo coincidencias en los nombres`)
    alert(`No hubo coincidencias en los nombres`)
}



// COMPARACION Y MOSTRAR DUPLICADO DE LOS APELLIDOS

const compararApellidos = () =>{
    let respuesta = prompt('¿Desea comparar los apellidos? \n 0: No || 1: Si ' )
    if (respuesta === '1') {
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
            colorElegido = prompt("Ingrese un color para destacar los nombre: ")

            for (i = 0; i<duplicadosApellidos.length;i++) {
                const tomarElementos = document.getElementsByClassName(`${duplicadosApellidos[i].toLowerCase()}`);
                for (x = 0; x<tomarElementos.length;x++) {
                    tomarElementos[x].style.color = `${colorElegido}`
                }
            }
        } else {
            console.log(`No hubo coincidencias en los apellidos`)
            alert(`No hubo coincidencias en los apellidos`)
        }
    }
    
}

compararApellidos()



