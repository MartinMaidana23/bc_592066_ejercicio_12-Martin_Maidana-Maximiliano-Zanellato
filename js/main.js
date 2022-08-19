                                    
console.log('Bootcamp 592066 - Martin Maidana - Maximiliano Zanellato')
console.log(titulo = document.querySelector("title").textContent)

                                    

let int1 = document.querySelectorAll('.int1')
let int2 = document.querySelectorAll('.int2')

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

let integranteA = Array.from(int1)
let integranteB = Array.from(int2)

primerIntegrante=[]
segundoIntegrante=[]

for(let i = 0; i< integranteA.length; i++){
    primerIntegrante.push(integranteA[i].textContent)
}
for(let i = 0; i< integranteB.length; i++){
    segundoIntegrante.push(integranteB[i].textContent)
}

integrante1 = [primerIntegrante[0], primerIntegrante[1],primerIntegrante[2].toUpperCase(), primerIntegrante[3].toUpperCase()]
integrante2 = [segundoIntegrante[0], segundoIntegrante[1],segundoIntegrante[2].toUpperCase(), segundoIntegrante[3].toUpperCase()]

i1= integrante1.filter(i=>i.length>0)
i2= integrante2.filter(i=>i.length>0)




console.log(`
--------
Primer Integrante: "${i1.join(' ')}"
Segundo Integrante: "${i2.join(' ')}"
--------
`);


                        // COMPARACION DE NOMBRES Y APELLIDOS //

let duplicados=[]

for (let i = 0; i < i1.length; i++ ){
    for(let x = 0; x<i1.length; x++){
        if (i1[i]==i2[x]) {
            duplicados.push(i1[i])
        }
    }
}

                        // COINCIDENCIAS //

if (duplicados != "") {
    console.log(`Hubo coincidencias: "${duplicados.join(', ')}"`)
    colorElegido = prompt("Ingrese un color para destacar los nombre: ") 
} else {
    console.log(`No hubo coincidencias`)
}


                        // CAMBIO DE COLOR A LOS DUPLICADOS //

for (i = 0; i<duplicados.length;i++) {
    const tomarElementos = document.getElementsByClassName(`${duplicados[i].toLowerCase()}`);
    for (x = 0; x<tomarElementos.length;x++) {
        tomarElementos[x].style.color = `${colorElegido}`
    }
}
