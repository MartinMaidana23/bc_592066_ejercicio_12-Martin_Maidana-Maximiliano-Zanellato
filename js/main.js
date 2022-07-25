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






















































    

